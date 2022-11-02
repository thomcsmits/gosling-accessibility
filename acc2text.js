function desc2text(desc) {
    // brief alt
    var textAlt = "Figure created with Gosling"
    if (desc.nTracks > 1) {
        textAlt = textAlt.concat( " showing " + desc.nTracks + " subfigures");
    }
    textAlt = textAlt.concat(". Automatic full description at URL.")
    
    // long description
    var textLong = "Description: "

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
    description.textHTML = "To be made";
    
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
        "xDomain" : hasGenomicAxes,
        "yDomain" : hasGenomicAxes,
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

        textLong = textLong.concat(" Subfigure " + desc.structure[subfig].number + " " + subfigPlace)

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
        if (typeof desc.structure.subfig0.xDomain  !== "undefined") {
            textLong = textLong.concat(" The x-domain shown of all subfigure is chromosome " + desc.structure.subfig0.xDomain.chromosome + " in interval " + desc.structure.subfig0.xDomain.interval);
        }
        toReport.xDomain = false;
    }

    if (desc.allSubfiguresSameValue.yDomain) {
        if (typeof desc.structure.subfig0.yDomain  !== "undefined") {
            textLong = textLong.concat(" The y-domain shown of all subfigure is chromosome " + desc.structure.subfig0.yDomain.chromosome + " in interval " + desc.structure.subfig0.yDomain.interval);
        }
        toReport.yDomain = false;
    }

    if (!desc.allSubfiguresSameValue.dataSource) {
        textLong = textLong.concat(" Not all data is from the same source. Sources are numbered.");
        toReport.dataSource = true;
    }
    
    return [textLong, toReport]
    
}


function determinePlace(subfig, prevFigureToLeft) {
    currFigure = subfig.number;
    currRowNumber = subfig.rowNumber;
    currColNumber = subfig.colNumber;
    
    if (currRowNumber === 0) {
        place = "(top row, ";
    } else {
        place = "(row " + currRowNumber + ", ";
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

    if (subfig.overlayed == true) {
        textSubfig = textSubfig.concat(" is an overlayed plot. Gosling's automatic text generation currently doesn't support overlayed plots.")
        return textSubfig
    }

    if (typeof subfig.specialDesc !== "undefined") {
        textSubfig = textSubfig.concat(" shows a " + subfig.specialDesc + ".")
    } else {
        textSubfig = textSubfig.concat(" shows a plot marked with " + subfig.mark + ".")
    }

    if (toReport.dataSource) {
        textSubfig = textSubfig.concat(" Data is from source " + subfig.dataSource + ".");
    }

    hasGenomicAxes = false;
    for (axis in subfig.axes) {
        textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown on the " + axis + "-axis.")
        
        if (axis === "x" && subfig.axes[axis].type === "genomic" && toReport.xDomain) {
            textSubfig = textSubfig.concat(" The x-domain shown is ...")
        }

        if (axis === "y" && subfig.axes[axis].type === "genomic" && toReport.yDomain) {
            textSubfig = textSubfig.concat(" The y-domain shown is ...")
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
