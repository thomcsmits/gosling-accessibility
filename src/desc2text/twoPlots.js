import { addTextSubfig } from "./description.js";

export function twoSubfig(desc) {
    var textLong = "Two plots (" + desc.structure.subfig0.description + " and " + desc.structure.subfig1.description + ")";

    if (typeof desc.title !== 'undefined') {
        textLong = textLong.concat(" titled '" + desc.title + "'.")
    } else {
        textLong = textLong.concat(" without title.")
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
       
    const places = determinePlaceTwo(desc);

    textLong = textLong.concat(" First plot (on the " + places.firstPlace + "):" + addTextSubfig(desc.structure.subfig0, toReport))
    textLong = textLong.concat(" Second plot (on the " + places.secondPlace + "):" + addTextSubfig(desc.structure.subfig1, toReport))

    textLong = textLong.charAt(0).toUpperCase() + textLong.slice(1);

    return textLong;
}


function determinePlaceTwo(desc) {
    
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
                firstPlace = "left";
                secondPlace = "right";
                break;
            default: 
                firstPlace = "top";
                secondPlace = "bottom";
        }
    } else {
        switch(desc.top.arrangement) {
            case "serial" || "horizontal": 
                firstPlace = "left";
                secondPlace = "right";
                break;
            default: 
                firstPlace = "top";
                secondPlace = "bottom";
        }
    }
    return {firstPlace, secondPlace};
}