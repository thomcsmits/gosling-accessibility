function desc2text(desc) {
    var textShort = "Alt: "
    var textLong = "Long description:"

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" Gosling figure with title: '" + desc.title + "'.")
    } else {
        textLong = textLong.concat(" Gosling figure without title.")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads: '" + desc.subtitle + "'.")
    }

    if (desc.nTracks > 1) {
        textLong = textLong.concat(" There are " + desc.nTracks + " subfigures.")

        for (subfig in desc.structure) {
            textLong = textLong.concat(" Subfigure " + subfig.slice(-1))
            textLong = textLong.concat(addTextSubfig(desc.structure[subfig]))
            textLong = textLong.concat("\n")
        }
    }

    else {
        textLong = textLong.concat(" The figure ")
        textLong = textLong.concat(addTextSubfig(desc.structure.subfig0))
        textLong = textLong.concat("\n")
    }

    return textLong;
}

function addTextSubfig(subfig) {

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

    for (axis in subfig.axes) {
        textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown on the " + axis + "-axis.")
    }

    return textSubfig
}


module.exports = {
    desc2text: desc2text
};
