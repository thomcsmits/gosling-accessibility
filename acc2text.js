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
    switch(desc.nTracks) {
        case 1:
            var textLong = oneSubfig(desc);
            break;

        case 2: 
            var textLong = twoSubfig(desc);
            break;
        
        default: 
            var textLong = multipleSubfig(desc)
    }

    var description = new Object();
    description.textAlt = textAlt;
    description.locationLong = locationLong;
    description.textLong = textLong;
  
    return description;
}


function oneSubfig(desc) {
    var textLong = ""
    textLong = textLong.concat(desc.structure.subfig0.description);

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" titled '" + desc.title + "'.")
    } else {
        textLong = ("untitled ").concat(textLong + ".")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads '" + desc.subtitle + "'.")
    }


    toReport = {
        "mark" : false,
        "assembly" : true,
        "layout" : true,
        "xDomain" : !desc.top.domain.xFullGenome,
        "yDomain" : !desc.top.domain.yFullGenome,
        "dataSource" : false,
        "categories" : typeof(desc.data.categories) !== "undefined"
    }
        
    textLong = textLong.concat(addTextSubfig(desc.structure.subfig0, toReport))

    textLong = textLong.charAt(0).toUpperCase() + textLong.slice(1);

    return textLong
}

function twoSubfig(desc) {
    var textLong = "Two plots (" + desc.structure.subfig0.description + " and " + desc.structure.subfig1.description + ")";

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" titled '" + desc.title + "'.")
    } else {
        textLong = textLong.concat(" without title.")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads '" + desc.subtitle + "'.")
    }

    toReport = {
        "mark" : false,
        "assembly" : true,
        "layout" : true,
        "xDomain" : !desc.top.domain.xFullGenome,
        "yDomain" : !desc.top.domain.yFullGenome,
        "dataSource" : false,
        "categories" : typeof(desc.data.categories) !== "undefined"
    }
       
    var firstPlace, secondPlace;

    if (desc.structure.subfig0.layout === "circular" && desc.structure.subfig1.layout === "circular") {
        switch(desc.top.arrangement) {
            case "serial": 
                firstPlace = "left half of ring";
                secondPlace = "right half of ring";
                break;
            case "parallel": 
                firstPlace = "outer ring";
                secondPlace = "inner ring";
            case "horizontal":
                firstPlace = "top";
                secondPlace = "bottom";
                break;
            default: 
                firstPlace = "left";
                secondPlace = "right";
        }
    } else {
        switch(desc.top.arrangement) {
            case "serial" || "horizontal": 
                firstPlace = "left";
                secondPlace = "right";
                break;
            default: 
                firstPlace = "left";
                secondPlace = "right";
        }
    }


    textLong = textLong.concat(" First plot (on the " + firstPlace + "):" + addTextSubfig(desc.structure.subfig0, toReport))
    textLong = textLong.concat(" Second plot (on the " + secondPlace + "):" + addTextSubfig(desc.structure.subfig1, toReport))

    textLong = textLong.charAt(0).toUpperCase() + textLong.slice(1);

    return textLong;
}


function multipleSubfig(desc) {

    var textLong = "Plot with " + desc.nTracks + " subfigures" 

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" titled: '" + desc.title + "'.")
    } else {
        textLong = ("untitled").concat(textLong + ".")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads: '" + desc.subtitle + "'.")
    }

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

        textLong = textLong.concat(":")

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
        "mark" : true,
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

    if (toReport.mark) {
        textSubfig.concat(subfig.description)
    }

    if (!subfig.multiTrackView.oneTrackInView && !subfig.multiTrackView.onlyDifferenceInMark) {
        //textSubfig = textSubfig.concat(" No further features could be extracted for this plot.");
        return textSubfig;
    }
    
    if (toReport.dataSource) {
        textSubfig = textSubfig.concat(" Data is from source " + subfig.data.dataSource + ".");
    }

    textSubfig = describeXY(subfig, toReport, textSubfig)

    if (typeof subfig.data.binSize !== "undefined") {
        textSubfig = textSubfig.concat(" Data is binned in intervals of " + subfig.data.binSize + " bp.");
    }

    if (toReport.categories && typeof subfig.data.categories !== "undefined") {
        if (subfig.data.nCategories === 1) {
            textSubfig = textSubfig.concat(" The only category shown is " + subfig.data.categories[0] + ".");
        } else {
            textSubfig = textSubfig.concat(" The " + subfig.data.nCategories + " different categories shown are: " + subfig.data.categories.slice(0, -1).join(", ") + " and " + subfig.data.categories.slice(-1) + ".");
        }
    }

    alreadyDescribed = ["x", "xe", "x1", "x1e", "y", "ye", "y1", "y1e"];

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
            textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown with " + hasSameFieldText);


            if (["row", "size", "text", "color"].includes(axis)) {
                if (typeof subfig.axes[axis].legend !== "undefined" && subfig.axes[axis].legend === true) {
                    textSubfig = textSubfig.concat(" (legend shown)")
                }
            }

            textSubfig = textSubfig.concat(".")
        }

    }

    if (toReport.layout && subfig.layout === "circular") {
        textSubfig = textSubfig.concat(" The genome is displayed in a circular way.");
    }

    return textSubfig
}


function describeXY(subfig, toReport, textSubfig) {
    let xValues = ["x", "X-axis", "xDomain", "top"]
    let yValues = ["y", "Y-axis", "yDomain", "left"]

    for (axis in subfig.axes) {
        if (axis === "x" | axis === "y") {
            if (axis === "x") {
                var values = xValues;
            } else {
                var values = yValues;
            }

            // add which axis it is
            textSubfig = textSubfig.concat(" " + values[1])
            
            // add where axis is shown
            if (typeof subfig.axes[values[0]].axis === "undefined") {
                textSubfig = textSubfig.concat(" (" + values[3] + ")");
            } else {
                if (subfig.axes[values[0]].axis === "none") {
                    textSubfig = textSubfig.concat(" (axis not shown)");
                } else {
                    textSubfig = textSubfig.concat(" ("+ subfig.axes[values[0]].axis + ")");
                } 
            } 

            // if genomic
            if (subfig.axes[values[0]].type === "genomic") {
                textSubfig = textSubfig.concat(" shows genome") 
                
                if (toReport.assembly) {
                    textSubfig = textSubfig.concat(" (" + subfig.assembly + ")");
                }
        
                if (toReport[values[2]]) {
                    if (typeof subfig[values[2]] !== "undefined") {
                        textSubfig = textSubfig.concat(" at chromosome " + subfig[values[2]].chromosome)
                        if (typeof subfig[values[2]].interval !== "undefined") {
                            textSubfig = textSubfig.concat(" in interval (" + subfig[values[2]].interval + ").");
                        } else {
                            textSubfig = textSubfig.concat(".");
                        }
                    } else {
                        textSubfig = textSubfig.concat(" (entire genome is shown).");
                    }
                } else {
                    textSubfig = textSubfig.concat(".")
                }
            } 
            
            // if not genomic
            else {
                textSubfig = textSubfig.concat(" shows the " + subfig.axes[values[0]].type + " field '" + subfig.axes[values[0]].field + "'.")
            }
        }

    }

    return textSubfig;
}


module.exports = {
    desc2text: desc2text
};
