function gos2desc(spec) {
    var desc = new Object();
    countTracks = 0;
    rowViews = 0;
    colViews = 0;

    // general properties
    desc.title = spec.title;
    desc.subtitle = spec.subtitle;
    desc.top = new Object();

    // default values
    const defaultValues = {
        assembly : "hg38",
        layout : "linear",
        arrangement : "vertical",
        alignment : "stack",
        static : false       
    }

    for (val in defaultValues) {
        if (typeof spec[val] !== "undefined") {
            desc.top[val] = spec[val];
        } else {
            desc.top[val] = defaultValues[val];
        }
    }

    // domain
    desc.top.domain = new Object()
    desc.top.domain.xFullGenome = true;
    desc.top.domain.xDomain = spec.xDomain;
    desc.top.domain.yFullGenome = true;
    desc.top.domain.yDomain = spec.yDomain;

    // data
    desc.data = new Object();
    desc.data.dataSource = new Object();
    desc.data.categories = new Object();

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
        "static" : true,
        "xDomain" : true,
        "yDomain" : true,
        "dataSource" : true,
        "categories" : true,
    }

    var savedAttributes = {
        "assembly" : desc.top.assembly,
        "layout" : desc.top.layout,
        "arrangement" : desc.top.arrangement,
        "alignment" : desc.top.alignment,
        "xDomain" : desc.top.domain.xDomain,
        "yDomain" : desc.top.domain.yDomain
    }

    traverseTracks(spec, savedAttributes, desc) 

    updateParentalProperties(desc) 

    desc.nTracks = countTracks;
    
    return(desc)
}



function traverseTracks(specPart, savedAttributes, desc){
    if ("tracks" in specPart) { 
        savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc);

        if (specPart.tracks.length > 1) {
            desc.structure["subfig" + countTracks] = describeSubfigMultipleTracksInView(specPart, countTracks, rowViews, colViews, savedAttributes, desc);
        } else {
            desc.structure["subfig" + countTracks] = describeSubfig(specPart.tracks[0], countTracks, rowViews, colViews, savedAttributes, desc);
        }
        countTracks ++;
            
        if (rowViews !== 0) {
            desc.allSubfiguresSameValue.allHorizontal = false;
        }
        if (colViews !== 0) {
            desc.allSubfiguresSameValue.allVertical = false;
        };
        return;
    }

    else if ("views" in specPart) {
        const currRow = rowViews;
        const currCol = colViews;

        specPart.views.forEach((view, i) => {

            if (i !== 0) {
                if (savedAttributes.arrangement === "vertical" | savedAttributes.arrangement === "parallel") {
                    rowViews ++;
                } else {
                    colViews ++;
                }
            }

            const savedAttributesCopy = updateSavedAttributes(view, savedAttributes, desc);

            traverseTracks(view, savedAttributesCopy, desc);
        });

        if (savedAttributes.arrangement === "vertical" | savedAttributes.arrangement === "parallel") {
            rowViews = currRow;
        } else {
            colViews = currCol;
        }
    }
}




function updateSavedAttributes(view, savedAttributes, desc) {
    savedAttributesCopy = JSON.parse(JSON.stringify(savedAttributes));

    for (attrName in Object.keys(savedAttributes)) {
        if (typeof view[attrName] !== "undefined") {
            savedAttributesCopy[attrName] = view[attrName];
            if (savedAttributesCopy[attrName] != savedAttributes[attrName]) {
                desc.allSubfiguresSameValue[attrName] = false
            }
        }
    }
    return savedAttributesCopy;
}


function updateParentalProperties(desc) {
    if (desc.allSubfiguresSameValue.allVertical === false && desc.allSubfiguresSameValue.allHorizontal === false) {
        desc.allSubfiguresSameValue.arrangement = false;
    } else {
        desc.allSubfiguresSameValue.arrangement = true;
    }

    if (typeof desc.top.domain.xDomain !== "undefined" & desc.allSubfiguresSameValue.xDomain) {
        desc.top.domain.xFullGenome = false;
    }
    if (typeof desc.top.domain.yDomain !== "undefined" & desc.allSubfiguresSameValue.yDomain) {
        desc.top.domain.yFullGenome = false;
    }
}




function describeSubfig(track, countTracks, rowViews, colViews, savedAttributes, desc, overlayed = false, oneMark = true) {
    subfig = new Object();
    subfig.number = countTracks;
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.overlayed = overlayed;
    subfig.assembly = savedAttributes.assembly;
    subfig.layout = savedAttributes.layout;
    
    if (oneMark) {
        subfig.mark = track.mark;
    }

    subfig.data = new Object()

    nSources = Object.keys(desc.data.dataSource).length;
    if (typeof track.data.url !== "undefined") {
        if (desc.data.dataSource.hasOwnProperty(track.data.url)) {
            subfig.data.dataSource = desc.data.dataSource[track.data.url]
        } else {
            if (nSources > 0) {
                desc.allSubfiguresSameValue.dataSource = false;
            }
            desc.data.dataSource[track.data.url] = nSources + 1
            subfig.data.dataSource = nSources + 1
        }
    } else if (typeof track.data.type === "json" && subfig.data.values.length > 25) {
        if (nSources > 0) {
            desc.allSubfiguresSameValue.dataSource = false;
        }
        desc.data.dataSource["newJsonSource" + nSources] = nSources + 1
        subfig.data.dataSource = nSources + 1
    }

    if (typeof track.data.categories !== "undefined") {
        subfig.data.nCategories = track.data.categories.length
    }

    if (typeof track.data.binSize !== "undefined") {
        subfig.data.binSize = track.data.binSize * 256
    }


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


function describeSubfigMultipleTracksInView(specPart, countTracks, rowViews, colViews, savedAttributes, desc) {
    subfig = new Object()
    subfig.number = countTracks
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.overlayed = true

    subfig.layers = new Object()

    // if stacked

    // if overlayed
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