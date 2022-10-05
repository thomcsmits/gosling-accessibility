function gos2desc(spec) {
    var desc = new Object();
    countTracks = 0;
    rowViews = 0;
    colViews = 0;

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

    desc.nTracks = countTracks
    return(desc)
}



function traverseTracks(specPart, savedAttributes, desc){

    if ("alignment" in specPart && specPart.alignment === "overlay") {
        savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc);

        desc.structure["subfig" + countTracks] = describeSubfigOverlayed(specPart, countTracks, rowViews, colViews, savedAttributes);
        countTracks ++; 

        return;
    }

    if ("tracks" in specPart) { 
        savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc);

        specPart.tracks.forEach((track, i) => {      
            if (i != 0) {
                if (savedAttributes.arrangement === "vertical") {
                    rowViews ++;
                } else {
                    colViews ++;
                }
            }
            desc.structure["subfig" + countTracks] = describeSubfig(track, countTracks, rowViews, colViews, savedAttributes);
            countTracks ++;
        });
        return;
    }

    else if ("views" in specPart) {
        const currRow = rowViews;
        const currCol = colViews;

        specPart.views.forEach((view, i) => {

            if (i !== 0) {
                if (savedAttributes.arrangement === "vertical") {
                    rowViews ++;
                } else {
                    colViews ++;
                }
            }

            const savedAttributesCopy = updateSavedAttributes(view, savedAttributes, desc);

            traverseTracks(view, savedAttributesCopy, desc);
        });

        if (savedAttributes.arrangement === "vertical") {
            rowViews = currRow;
        } else {
            colViews = currCol;
        }
    }
}




function updateSavedAttributes(view, savedAttributes, desc) {
    savedAttributesCopy = JSON.parse(JSON.stringify(savedAttributes));

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


function describeSubfig(track, countTracks, rowViews, colViews, savedAttributes) {
    subfig = new Object();
    subfig.number = countTracks;
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.overlayed = false;
    subfig.assembly = savedAttributes.assembly;
    subfig.layout = savedAttributes.layout;
    subfig.mark = track.mark;
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


function describeSubfigOverlayed(track, countTracks, rowViews, colViews, savedAttributes) {
    subfig = new Object()
    subfig.number = countTracks
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.overlayed = true

    subfig.layers = new Object()

    

    // option 1: each overlayed track has its own data
    // option 2: all from the same data

    return subfig
}


function determineSpecialCases(track, subfig) {
    try {
        if (track.mark === "point" && track.x.type === "quantitative" & track.y.type === "quantitative") {
            subfig.specialDesc = "scatter plot"
        }
    } catch (error) {}

    try {
        if (track.mark === "line" && track.x.type === "genomic" & track.y.type === "quantitative") {
            subfig.specialDesc = "line chart"
        }
    } catch (error) {}

      
    try {
        if (track.mark === "bar" && track.x.type === "genomic" & track.y.type === "quantitative") {
            subfig.specialDesc = "bar chart"
        }
    } catch (error) {}

    try {
        if (track.mark === "rect" && track.x.type === "genomic" & track.xe.type === "genomic" & track.color.type === "quantitative") {
            subfig.specialDesc = "heatmap"
        }
    } catch (error) {}

    try {
        if (track.mark === "rect" && track.x.type === "genomic" & track.xe.type === "genomic" & track.color.type === "nominal") {
            subfig.specialDesc = "ideogram"
        }
    } catch (error) {}
}



module.exports = {
    gos2desc: gos2desc
};