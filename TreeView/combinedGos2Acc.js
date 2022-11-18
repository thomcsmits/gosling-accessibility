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

    attrNames = Object.keys(savedAttributes)

    for (let i = 0; i < attrNames.length; i++) {
        attrName = attrNames[i]
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

    if (typeof desc.top.domain.xDomain !== "undefined" | !desc.allSubfiguresSameValue.xDomain) {
        desc.top.domain.xFullGenome = false;
    }
    if (typeof desc.top.domain.yDomain !== "undefined" | !desc.allSubfiguresSameValue.yDomain) {
        desc.top.domain.yFullGenome = false;
    }
}




function describeSubfig(track, countTracks, rowViews, colViews, savedAttributes, desc, oneTrackInView = true, oneMarkInView = true, onlyDifferenceInMark = null) {
    subfig = new Object();
    subfig.number = countTracks;
    subfig.rowNumber = rowViews;
    subfig.colNumber = colViews;
    subfig.multiTrackView = {"oneTrackInView": oneTrackInView, "oneMarkInView": oneMarkInView, "onlyDifferenceInMark": onlyDifferenceInMark}
    subfig.title = track.title;
    subfig.assembly = savedAttributes.assembly;
    subfig.layout = savedAttributes.layout;
    
    if (oneMarkInView) {
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
        subfig.data.categories = track.data.categories;
        subfig.data.nCategories = track.data.categories.length;
        if (typeof desc.data.categories === "undefined") {
            desc.data.categories = track.data.categories;
        } else {
            if (track.data.categories.join() !== desc.data.categories.join()) {
                desc.allSubfiguresSameValue.categories = false;
            }
        }
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

    if (oneMarkInView) {
        determineSpecialCases(track, subfig)
    }

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

    // scenario: only extra specification with multiple tracks is multiple mark types
    if (Object.keys(specPart.tracks[0]).join() === Array("mark").join()) {
        subfig = describeSubfig(specPart, countTracks, rowViews, colViews, savedAttributes, desc, oneTrackInView = false, oneMarkInView = false, onlyDifferenceInMark = true)
        var mark = new Array(specPart.tracks.length);
        for (let i = 0; i < specPart.tracks.length; i++) {
            mark[i] = specPart.tracks[i].mark;
        }
        // removing brush as a mark, checking if it is now a 'normal' track
        let index = mark.indexOf("brush");
        if (index !== -1) {
            mark.splice(index, 1);
        }
        if (mark.length === 1) {
            subfig.multiTrackView = {"oneTrackInView": true, "oneMarkInView": true, "onlyDifferenceInMark": null}
            subfig.mark = mark[0];
            subfig.brush = true;
        } else {
            subfig.mark = mark;
        }
    } 
    // scenario: 2 stacked full specifications
    // scenario: complicated overlay / other
    else {
        subfig = new Object()
        subfig.number = countTracks
        subfig.rowNumber = rowViews;
        subfig.colNumber = colViews;
        subfig.multiTrackView = {"oneTrackInView": false, "oneMarkInView": null, "onlyDifferenceInMark": false}
    }

    subfig.nOverlayed = specPart.tracks.length;
    
    // var temporaryTop = JSON.parse(JSON.stringify(specPart));
    // delete temporaryTop.tracks;
    // for (let i = 0; i < subfig.nOverlayed; i++) {
    //     subfig.layers[i] = new Object();
    //     Object.obtain(subfig.layers[i], temporaryTop);
    // }

    // for top things: iterate
    // for nTracks: iterate
    // stacked or overlayed

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

function desc2text(desc) {
    // brief alt
    var textAlt = "Genomic visualization created with Gosling"
    if (desc.nTracks > 1) {
        textAlt = textAlt.concat( " showing " + desc.nTracks + " subfigures");
    }
    textAlt = textAlt.concat(". Automatic full description at URL.")
    
    // long description
    var textLong = "Description:"

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" Gosling figure with title: '" + desc.title + "'.")
    } else {
        textLong = textLong.concat(" Gosling figure without title.")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads: '" + desc.subtitle + "'.")
    }

    if (desc.nTracks > 1) {
        textLong = multipleSubfig(desc, textLong)
    } else {
        textLong = oneSubfig(desc, textLong)
    }

    var description = new Object();
    description.textAlt = textAlt;
    description.textLong = textLong;
  
    return description;
}


function oneSubfig(desc, textLong) {
    // if there is no genomic axis in the figure, then there is no need to report the assembly or the genomic domains
    hasGenomicAxes = false;
    for (axis in subfig.axes) {
        if (subfig.axes[axis].type === "genomic") {
            hasGenomicAxes = true;
        }
    }
    toReport = {
        "assembly" : hasGenomicAxes,
        "layout" : true,
        "xDomain" : hasGenomicAxes & !desc.top.domain.xFullGenome,
        "yDomain" : hasGenomicAxes & !desc.top.domain.yFullGenome,
        "dataSource" : false,
    }
        
    textLong = textLong.concat(" The figure")
    textLong = textLong.concat(addTextSubfig(desc.structure.subfig0, toReport))

    return textLong
}


function multipleSubfig(desc, textLong) {

    textLong = textLong.concat(" There are " + desc.nTracks + " subfigures.")

    var tmpTextAllSubfiguresSameValueReturn = textAllSubfiguresSameValue(desc, textLong)
    textLong = tmpTextAllSubfiguresSameValueReturn[0]
    toReport = tmpTextAllSubfiguresSameValueReturn[1]

    var prevFigureToLeft = 0;

    for (subfig in desc.structure) {
        
        if (!desc.allSubfiguresSameValue.arrangement) {
            var tmpDeterminePlaceReturn = determinePlace(desc.structure[subfig], prevFigureToLeft);
            var subfigPlace = tmpDeterminePlaceReturn[0]
            prevFigureToLeft = tmpDeterminePlaceReturn[1]
        } else {
            var subfigPlace = ""
        }

        textLong = textLong.concat(" Subfigure " + desc.structure[subfig].number + subfigPlace)

        if (typeof subfig.title !== "undefined") {
            textLong = textLong.concat(", titled '" +  subfig.title + "', ")
        }

        textLong = textLong.concat(addTextSubfig(desc.structure[subfig], toReport))
        
    }
    return textLong;
}

function textAllSubfiguresSameValue(desc, textLong) {    
    if (desc.allSubfiguresSameValue.allVertical) {
        textLong = textLong.concat(" All subfigures are arranged vertically.");
    } else if (desc.allSubfiguresSameValue.allHorizontal) {
        textLong = textLong.concat(" All subfigures are arranged horizontally.");
    } 

    toReport = {
        "assembly" : true,
        "layout" : true,
        "xDomain" : true,
        "yDomain" : true,
        "dataSource" : false,
        "categories" : false
    }

    if (desc.allSubfiguresSameValue.assembly) {
        textLong = textLong.concat(" The displayed genome is " + desc.structure.subfig0.assembly + ".");
        toReport.assembly = false;
    }

    if (desc.allSubfiguresSameValue.layout) {
        if (desc.structure.subfig0.layout === "circular") {
            textLong = textLong.concat(" All shown genomes are circular.");
        }
        toReport.layout = false;
    }

    if (desc.allSubfiguresSameValue.xDomain) {
        if (typeof desc.structure.subfig0.xDomain !== "undefined") {
            textLong = textLong.concat(" The x-domain shown of all subfigures is chromosome " + desc.structure.subfig0.xDomain.chromosome)
            if (typeof desc.structure.subfig0.xDomain.interval !== "undefined") {
                textLong = textLong.concat(" in interval (" + desc.structure.subfig0.xDomain.interval + ").");
            } else {
                textLong = textLong.concat(".");
            }
           
        }
        toReport.xDomain = false;
    }

    if (desc.allSubfiguresSameValue.yDomain) {
        if (typeof desc.structure.subfig0.yDomain  !== "undefined") {
            textLong = textLong.concat(" The y-domain shown of all subfigures is chromosome " + desc.structure.subfig0.yDomain.chromosome) 
            if (typeof desc.structure.subfig0.yDomain.interval !== "undefined") {
                textLong = textLong.concat(" in interval (" + desc.structure.subfig0.yDomain.interval + ").");
            } else {
                textLong = textLong.concat(".");
            }
        }
        toReport.yDomain = false;
    }

    if (!desc.allSubfiguresSameValue.dataSource) {
        textLong = textLong.concat(" Not all data is from the same source. Sources are numbered.");
        toReport.dataSource = true;
    }

    if (typeof desc.data.categories !== "undefined") {
        if (desc.allSubfiguresSameValue.categories) {
            if (desc.data.categories.length === 1) {
                textSubfig = textSubfig.concat(" There is only category shown:  " + subfig.data.categories[0] + ".");
            } else {
                textLong = textLong.concat(" There are " + desc.data.categories.length + " categories (samples) displayed: " + desc.data.categories.slice(0, -1).join(", ") + " and " + desc.data.categories.slice(-1) + ".");
            }
        } else {
            toReport.categories = true;
        }
    }
    
    return [textLong, toReport]
    
}


function determinePlace(subfig, prevFigureToLeft) {
    currFigure = subfig.number;
    currRowNumber = subfig.rowNumber;
    currColNumber = subfig.colNumber;
    
    if (currRowNumber === 0) {
        place = " (top row, ";
    } else {
        place = " (row " + currRowNumber + ", ";
    }
    if (currColNumber === 0) {
        place = place.concat("on the left)");
    } else {
        place = place.concat("on the right of subfigure " + prevFigureToLeft + ")");
        prevFigureToLeft = currFigure;
    }
    return [place, prevFigureToLeft];
}



function addTextSubfig(subfig, toReport) {

    var textSubfig = "";

    //{"oneTrackInView": false, "oneMarkInView": null, "onlyDifferenceInMark": false}

    if (!subfig.multiTrackView.oneTrackInView) {
        if (subfig.multiTrackView.onlyDifferenceInMark) {
            if (subfig.alignment === "stack") {
                textSubfig = textSubfig.concat(" is an stacked plot (with " + subfig.nOverlayed + " tracks, only differing in their mark). The shown marks are " + subfig.mark.slice(0, -1).join(", ") + " and " + subfig.mark.slice(-1) + ".");
            } else {
                textSubfig = textSubfig.concat(" is an overlayed plot (with " + subfig.nOverlayed + " tracks, only differing in their mark). The shown marks are " + subfig.mark.slice(0, -1).join(", ") + " and " + subfig.mark.slice(-1) + ".");
            }
        } else {
            textSubfig = textSubfig.concat(" is an overlayed plot (with " + subfig.nOverlayed + " tracks). Gosling's automatic text generation currently doesn't support overlayed plots.");
            return textSubfig;
        }  
    } else {
        if (typeof subfig.specialDesc !== "undefined") {
            textSubfig = textSubfig.concat(" shows a " + subfig.specialDesc + ".")
        } else {
            textSubfig = textSubfig.concat(" shows a plot marked with " + subfig.mark + ".")
        }
    }

    if (toReport.dataSource) {
        textSubfig = textSubfig.concat(" Data is from source " + subfig.data.dataSource + ".");
    }

    if (typeof subfig.data.binSize !== "undefined") {
        textSubfig = textSubfig.concat(" Data is binned in intervals of " + subfig.data.binSize + " bp.");
    }

    if (toReport.categories && typeof subfig.data.categories !== "undefined") {
        if (subfig.data.nCategories === 1) {
            textSubfig = textSubfig.concat(" The only category shown is " + subfig.data.categories[0] + ".");
        } else {
            textSubfig = textSubfig.concat(" The " + subfig.data.nCategories + " different samples shown are: " + subfig.data.categories.slice(0, -1).join(", ") + " and " + subfig.data.categories.slice(-1) + ".");
        }
    }

    hasGenomicAxes = false;

    alreadyDescribed = [];

    for (axis in subfig.axes) {
        // check if multiple axis have the same data, and if so, describe them together
        if (!alreadyDescribed.includes(axis)){
            hasSameField = [axis];
            for (axis2 in subfig.axes) {
                if (axis2 !== axis) {
                    if (subfig.axes[axis].field === subfig.axes[axis2].field && subfig.axes[axis].type === subfig.axes[axis2].type) {
                        hasSameField = [...hasSameField, axis2];
                        alreadyDescribed = [...alreadyDescribed, axis2];
                    }
                }
            }
            if (hasSameField.length > 1) {
                hasSameFieldText = hasSameField.slice(0, -1).join(", ") + " and " + hasSameField.slice(-1);
            }
            else {
                hasSameFieldText = hasSameField.toString();
            }
            textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown on the " + hasSameFieldText + "-axis.")

        }
        
        axisWithAxis = ["x", "y"]
        if (axisWithAxis.includes(axis)) {
            if (typeof subfig.axes[axis].axis === "undefined") {
                if (axis === "x") {
                    axisValue = " shown on top side of figure."
                } else {
                    axisValue = " shown on left side of figure."
                }
            } else {
                if (subfig.axes[axis].axis === "none") {
                    axisValue = " not shown."
                } else {
                    axisValue = " shown on " + subfig.axes[axis].axis + " side of figure."   
                } 
            } 
            textSubfig = textSubfig.concat(" The " + axis + "-axis is" + axisValue)
        }

        axisWithLegend = ["row", "size", "text", "color"]
        if (axisWithLegend.includes(axis)) {
            if (typeof subfig.axes[axis].legend !== "undefined" && subfig.axes[axis].legend === true) {
                textSubfig = textSubfig.concat(" Legend for " + axis + " is shown.")
            }
        }

        if (axis === "x" && subfig.axes.x.type === "genomic" && toReport.xDomain) {
            if (typeof subfig.xDomain !== "undefined") {
                textSubfig = textSubfig.concat(" The x-domain shown is chromosome " + subfig.xDomain.chromosome)
                if (typeof subfig.xDomain.interval !== "undefined") {
                    textSubfig = textSubfig.concat(" in interval (" + subfig.xDomain.interval + ").");
                } else {
                    textSubfig = textSubfig.concat(".");
                }
            } else {
                textSubfig = textSubfig.concat(" Full genome is shown.");
            }
           
        }

        if (axis === "y" && subfig.axes.y.type === "genomic" && toReport.yDomain) {
            if (typeof subfig.xDomain !== "undefined") {
                textSubfig = textSubfig.concat(" The y-domain shown is chromosome " + subfig.yDomain.chromosome)
                if (typeof subfig.yDomain.interval !== "undefined") {
                    textSubfig = textSubfig.concat(" in interval (" + subfig.yDomain.interval + ").");
                } else {
                    textSubfig = textSubfig.concat(".");
                }
            } else {
                textSubfig = textSubfig.concat(" Full genome is shown.");
            }
        }

        if (subfig.axes[axis].type === "genomic") {
            hasGenomicAxes = true;
        }
    }

    if (toReport.assembly && hasGenomicAxes) {
        textSubfig = textSubfig.concat(" The displayed genome is " + subfig.assembly + ".");
    }

    if (toReport.layout && subfig.layout === "circular") {
        textSubfig = textSubfig.concat(" The genome is displayed in a circular way.");
    }

    return textSubfig
}
