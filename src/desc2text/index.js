import { oneSubfig } from "./onePlot.js";
import { twoSubfig } from "./twoPlots.js";
import { multipleSubfig } from "./multiplePlots.js";



export function desc2text(desc) {
    // brief alt
    var textAlt = "Genomic visualization."

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

    textAlt = textAlt.concat(" " + textLong.split('.')[0] + ".")

    var description = new Object();
    description.textAlt = textAlt;
    description.locationLong = locationLong;
    description.textLong = textLong;

    return description;
}