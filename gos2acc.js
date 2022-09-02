function gos2desc(spec) {
    var desc = new Object();
    countTracks = 0;
    countViews = 0;

    // general properties
    desc.title = spec.title;
    desc.subtitle = spec.subtitle;
    
    // assembly
    if (typeof spec.assembly !== "undefined") { 
        desc.assembly = spec.assembly; 
    } else { desc.assembly = "hg38" } // default

    // layout
    if (typeof spec.layout !== "undefined") {
        desc.layout = spec.layout;
    } else {
        desc.layout = "circular" // default
    }

    // arrangement
    if (typeof spec.arrangement !== "undefined") {
        desc.arrangement = spec.arrangement;
    } else {
        desc.arrangement = "vertical" // default
    }

    // alignment
    if (typeof spec.alignment !== "undefined") {
        desc.alignment = spec.alignment;
    } else {
        desc.alignment = "stack" // default
    }

    // domain
    desc.xDomain = spec.xDomain;
    desc.yDomain = spec.yDomain;

    // layout
    desc.structure = new Object()
    // desc.arr = new Array()

    // saving attributes
    desc.allSubfiguresSameValue = {
        "assembly" : true,
        "layout" : true,
        "arrangement" : true,
        "alignment" : true,
        "domain" : true
    }

    var savedAttributes = {
        "assembly" : desc.assembly,
        "layout" : desc.layout,
        "arrangement" : desc.arrangement,
        "alignment" : desc.alignment,
        "xDomain" : desc.xDomain,
        "yDomain" : desc.yDomain
    }

    traverseTracks(spec, savedAttributes, desc)


    // determine arrangement of all plots
    const arr = [];
    const root = traverseTracksForArrangement(spec) 
    arr.push(root);

    desc.nTracks = countTracks
    return(desc)
}


function traverseTracks(specPart, savedAttributes, desc){
    if ("alignment" in specPart && specPart.alignment === "overlay") {
        desc.structure["subfig" + countTracks] = describeSubfigOverlayed(specPart, countTracks, savedAttributes);
        countTracks ++; 
        return;
    }
    if ("tracks" in specPart) { 
        savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc)
        specPart.tracks.forEach((track) => {       
            desc.structure["subfig" + countTracks] = describeSubfig(track, countTracks, savedAttributes);
            countTracks ++;
        });
    }
    else if ("views" in specPart){
        specPart.views.forEach((view) => {
            savedAttributesCopy = updateSavedAttributes(view, savedAttributes, desc)
            traverseTracks(view, savedAttributesCopy, desc);
        });
    }
}


function traverseTracksForArrangement(specPart) {
    if ("tracks" in specPart) {
        return {}; // empty object

    } else if("views" in specPart) {
        let totalViews = [];
        let prevArrangement;
        let curViews = [];
        
        specPart.views.forEach((view, i) => {
            const downstreamInfo = traverseTracksForArrangement(view);
            const { arrangement: childArrangement, views: childViews } = downstreamInfo;

            if(Object.keys(downstreamInfo).length === 0) {
                // this means `view` is not containing any child views, so just add this
                curViews = [...curViews, view];
            } else if(i === 0 || !prevArrangement) {
                // we do not yet have a view to compare, so just record this
                curViews = [...curViews, ...childViews];
                prevArrangement = childArrangement;
            } else if(prevArrangement === childArrangement) {
                // this means current and the previous `view`s uses the same arrangement, so merge them
                curViews = [...curViews, ...childViews];
            } else {
                // this means we encountered a different arrangement, so record the previous views
                arr.push({ arrnagement: prevArrangement, views: curViews });
                totalViews = [...totalViews, [...curViews]];
                curViews = [];
                prevArrangement = null;
            }
        });

        totalViews = [...totalViews, ...curViews];

        return { arrangement: specPart.arrangement, views: totalViews };
    }
}




function updateSavedAttributes(view, savedAttributes, desc) {
    savedAttributesCopy = JSON.parse(JSON.stringify(savedAttributes)) 

    if (typeof view.assembly !== "undefined") {
        savedAttributesCopy.assembly = view.assembly
        if (savedAttributesCopy.assembly != savedAttributes.assembly) {
            desc.allSubfiguresSameValue.assembly = false;
        }
    }
    if (typeof view.layout !== "undefined") {
        savedAttributesCopy.layout = view.layout
        if (savedAttributesCopy.layout != savedAttributes.layout) {
            desc.allSubfiguresSameValue.layout = false;
        }
    }
    if (typeof view.arrangement !== "undefined") {
        savedAttributesCopy.arrangement = view.arrangement
        if (savedAttributesCopy.arrangement != savedAttributes.arrangement) {
            desc.allSubfiguresSameValue.arrangement = false;
        }
    }
    if (typeof view.alignment !== "undefined") {
        savedAttributesCopy.alignment = view.alignment
        if (savedAttributesCopy.alignment != savedAttributes.alignment) {
            desc.allSubfiguresSameValue.alignment = false;
        }
    }

    return savedAttributesCopy;
}


function describeSubfig(track, countTracks, savedAttributes) {
    subfig = new Object()
    subfig.number = countTracks
    subfig.overlayed = false
    subfig.assembly = savedAttributes.assembly
    subfig.layout = savedAttributes.layout
    subfig.mark = track.mark
    subfig.axes = new Object();

    const channelOptions = ["x", "xe", "y", "ye", "x1", "x1e", "y1", "y1e", "row", "size", "text", "color", "stroke", "strokeWidth", "opacity"]

    for (channel in track) {
        if (channelOptions.includes(channel)) {
            // only if the visual channel is encoded with a field, is it a variable. It can also be set to a constant value.
            if (track[channel].hasOwnProperty("field")){
                subfig.axes[channel] = track[channel]
            }
            
        }
    }

    determineSpecialCases(track, subfig)

    return subfig
}


function describeSubfigOverlayed(track, countTracks, savedAttributes) {
    subfig = new Object()
    subfig.number = countTracks
    subfig.overlayed = true

    return subfig
}


function determineSpecialCases(track, subfig) {
    if (track.mark === "point" && track.x.type === "quantitative" & track.y.type === "quantitative") {
        subfig.specialDesc = "scatter plot"
    }
}


module.exports = {
    gos2desc: gos2desc
};