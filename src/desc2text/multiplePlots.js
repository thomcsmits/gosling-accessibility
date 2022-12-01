import { addTextSubfig } from "./description.js";

export function multipleSubfig(desc) {

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
    var toReport = tmpTextAllSubfiguresSameValueReturn[1]

    var prevFigureToLeft = 0;

    for (var subfig in desc.structure) {
        
        if (!desc.allSubfiguresSameValue.arrangement) {
            var tmpDeterminePlaceReturn = determinePlaceMultiple(desc.structure[subfig], prevFigureToLeft);
            var subfigPlace = tmpDeterminePlaceReturn[0]
            prevFigureToLeft = tmpDeterminePlaceReturn[1]
        } else {
            var subfigPlace = ""
        }

        textLong = textLong.concat(" Subfigure " + (desc.structure[subfig].number + 1) + subfigPlace)

        if (typeof subfig.title !== "undefined") {
            textLong = textLong.concat(", titled '" +  subfig.title + "', ")
        }

        textLong = textLong.concat(" shows a")

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

    var toReport = {
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
            textLong = textLong.concat(" The x-domain shown of all subfigures is chromosome " + desc.structure.subfig0.xDomain.chromosome.replace('chr', ''));
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


function determinePlaceMultiple(subfig, prevFigureToLeft) {
    var currFigure = subfig.number;
    var currRowNumber = subfig.rowNumber;
    var currColNumber = subfig.colNumber;
    
    var place;
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
