function desc2text(desc) {
    var textShort = "Alt: "
    var textLong = "Long description:"

    if (typeof desc.titel !== 'undefined') {
        textLong = textLong.concat(" Gosling figure with title: '" + desc.title + "'.")
    } else {
        textLong = textLong.concat(" Gosling figure without title.")
    }

    if (typeof desc.subtitle !== 'undefined') {
        textLong = textLong.concat(" The subtitle reads: '" + desc.subtitle + "'.")
    }

    if (desc.nTracks > 1) {
        textLong = textLong.concat(" There are " + desc.nTracks + " subfigures.")
    }

    for (subfig in desc.structure) {
        textLong = textLong.concat(" Subfigure " + subfig.slice(-1))
        textLong = textLong.concat(addTextSubfig(desc.structure[subfig]))
    }

    return textLong;
}

function addTextSubfig(subfig) {
    var textSubfig = "";

    if (typeof subfig.specialDesc !== "undefined") {
        textSubfig = textSubfig.concat(" shows a plot marked with " + subfig.mark + ".")
    } else {
        textSubfig = textSubfig.concat(" shows a " + subfig.specialDesc + ".")
    }

    for (axis in subfig.axes) {
        textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown on the " + axis + "-axis.")
    }

    return textSubfig
}


module.exports = {
    desc2text: desc2text
};
