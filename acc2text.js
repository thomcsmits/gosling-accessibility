function desc2text(desc) {
    // brief alt
    var textAlt = "Genomic visualization created with Gosling"
    if (desc.nTracks > 1) {
        textAlt = textAlt.concat( " showing " + desc.nTracks + " subfigures");
    }
    textAlt = textAlt.concat(".")
    

    // random location
    let randomIdentifyer = (Math.random()).toString(36).substring(2,7);
    var locationLong = "https://gosling-lang.org/this-link-does-not-exist-".concat(randomIdentifyer).concat("/")


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
    description.locationLong = locationLong;
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


module.exports = {
    desc2text: desc2text
};
