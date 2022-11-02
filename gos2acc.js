function gos2desc(spec) {
    var desc = new Object();
    countTracks = 0;
    rowViews = 0;
    colViews = 0;

    // general properties
    desc.title = spec.title;
    desc.subtitle = spec.subtitle;
    
    // default values
    const defaultValues = {
        assembly : "hg38",
        layout : "linear",
        arrangement : "vertical",
        alignment : "stack"        
    }

    for (val in defaultValues) {
        if (typeof spec[val] !== "undefined") {
            desc[val] = spec[val];
        } else {
            desc[val] = defaultValues[val];
        }
    }

    // domain
    desc.xDomain = spec.xDomain;
    desc.yDomain = spec.yDomain;

    // data
    desc.dataSource = new Object()

    // layout
    desc.structure = new Object()

    // saving attributes
    desc.allSubfiguresSameValue = {
        "assembly" : true,
        "layout" : true,
        "arrangement" : true,
        "allVertical" : true, 
        "allHorizontal" : true,
        "alignment" : true,
        "xDomain" : true,
        "yDomain" : true,
        "dataSource" : true,
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

    if (desc.allSubfiguresSameValue.allVertical === false && desc.allSubfiguresSameValue.allHorizontal === false) {
        desc.allSubfiguresSameValue.arrangement = false;
    } else {
        desc.allSubfiguresSameValue.arrangement = true;
    }

    desc.nTracks = countTracks;

    //desc.positionMatrix = getPositionMatrix(desc);
    
    return(desc)
}



function traverseTracks(specPart, savedAttributes, desc){

    if ("alignment" in specPart && specPart.alignment === "overlay") {
        savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc);

        desc.structure["subfig" + countTracks] = describeSubfigOverlayed(specPart, countTracks, rowViews, colViews, savedAttributes, desc);
        countTracks ++;
        if (rowViews !== 0) {
            desc.allSubfiguresSameValue.allHorizontal = false;
        }
        if (colViews !== 0) {
            desc.allSubfiguresSameValue.allVertical = false;
        } 

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
            desc.structure["subfig" + countTracks] = describeSubfig(track, countTracks, rowViews, colViews, savedAttributes, desc);
            countTracks ++;
            if (rowViews !== 0) {
                desc.allSubfiguresSameValue.allHorizontal = false;
            }
            if (colViews !== 0) {
                desc.allSubfiguresSameValue.allVertical = false;
            }
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

    savedAttributesNames = ["assembly", "layout", "arrangement", "alignment", "xDomain", "yDomain"]

    for (let i = 0; i < savedAttributesNames.length; i++) {
        attrName = savedAttributesNames[i]
        if (typeof view[attrName] !== "undefined") {
            savedAttributesCopy[attrName] = view[attrName];
            if (savedAttributesCopy[attrName] != savedAttributes[attrName]) {
                desc.allSubfiguresSameValue[attrName] = false
            }
        }
    }

    return savedAttributesCopy;
}


function describeSubfig(track, countTracks, rowViews, colViews, savedAttributes, desc) {
    subfig = new Object();
    subfig.number = countTracks;
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.overlayed = false;
    subfig.assembly = savedAttributes.assembly;
    subfig.layout = savedAttributes.layout;
    subfig.mark = track.mark;
    subfig.axes = new Object();

    if (typeof track.data.url !== "undefined") {
        nSources = Object.keys(desc.dataSource).length;
        if (desc.dataSource.hasOwnProperty(track.data.url)) {
            subfig.dataSource = desc.dataSource[track.data.url]
        } else {
            if (nSources > 0) {
                desc.allSubfiguresSameValue.dataSource = false;
            }
            desc.dataSource[track.data.url] = nSources + 1
            subfig.dataSource = nSources + 1
        }
    }

    if (typeof track.data.type === "json" && subfig.data.values.length > 25) {
        desc.dataSource
    }

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

    if (typeof track.x !== "undefined") {
        if (typeof track.x.domain !== "undefined") {
            subfig.xDomain = track.x.domain;
            if (subfig.xDomain != savedAttributes.xDomain) {
                desc.allSubfiguresSameValue.xDomain = false;
            }
        } else {
        subfig.xDomain = savedAttributes.xDomain;
        }
    }
    if (typeof track.y !== "undefined") {
        if (typeof track.y.domain !== "undefined") {
            subfig.yDomain = track.y.domain;  
            if (subfig.yDomain != savedAttributes.yDomain) {
                desc.allSubfiguresSameValue.yDomain = false;
            }
        } else {
        subfig.yDomain = savedAttributes.yDomain;
        }
    }

    return subfig
}


function describeSubfigOverlayed(track, countTracks, rowViews, colViews, savedAttributes, desc) {
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