import { defaultSpecValues } from "./defaultValues.js";
import { traverseTracks, updateParentalProperties } from "./traversal.js";

export function gos2desc(spec) {
    var desc = new Object();
    var counter = {"countTracks" : 0, "rowViews" : 0, "colViews" : 0};

    // general properties
    desc.title = spec.title;
    desc.subtitle = spec.subtitle;
    desc.top = new Object();

    for (const val in defaultSpecValues) {
        if (typeof spec[val] !== "undefined") {
            desc.top[val] = spec[val];
        } else {
            desc.top[val] = defaultSpecValues[val];
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

    traverseTracks(spec, counter, savedAttributes, desc) 

    updateParentalProperties(desc) 

    desc.nTracks = counter.countTracks;
    
    return(desc)
}


