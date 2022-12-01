import { addTextSubfig } from "./description.js";

export function oneSubfig(desc) {
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


    var toReport = {
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