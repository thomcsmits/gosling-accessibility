import { describeSubfig, describeSubfigMultipleTracksInView } from "./subfig.js";

export function traverseTracks(specPart, counter, savedAttributes, desc){
    if ("tracks" in specPart) { 
        var savedAttributesCopy = updateSavedAttributes(specPart, savedAttributes, desc);

        if (specPart.tracks.length > 1) {
            desc.structure["subfig" + counter.countTracks] = describeSubfigMultipleTracksInView(specPart, counter, savedAttributesCopy, desc);
        } else {
            desc.structure["subfig" + counter.countTracks] = describeSubfig(specPart.tracks[0], counter, savedAttributesCopy, desc);
        }
        counter.countTracks ++;
            
        if (counter.rowViews !== 0) {
            desc.allSubfiguresSameValue.allHorizontal = false;
        }
        if (counter.colViews !== 0) {
            desc.allSubfiguresSameValue.allVertical = false;
        };
        return;
    }

    else if ("views" in specPart) {
        const currRow = counter.rowViews;
        const currCol = counter.colViews;

        specPart.views.forEach((view, i) => {

            if (i !== 0) {
                if (savedAttributes.arrangement === "vertical" | savedAttributes.arrangement === "parallel") {
                    counter.rowViews ++;
                } else {
                    counter.colViews ++;
                }
            }

            const savedAttributesCopy = updateSavedAttributes(view, savedAttributes, desc);

            traverseTracks(view, counter, savedAttributesCopy, desc);
        });

        if (savedAttributes.arrangement === "vertical" | savedAttributes.arrangement === "parallel") {
            counter.rowViews = currRow;
        } else {
            counter.colViews = currCol;
        }
    }
}




function updateSavedAttributes(view, savedAttributes, desc) {
    var savedAttributesCopy = JSON.parse(JSON.stringify(savedAttributes));

    const attrNames = Object.keys(savedAttributes)

    for (let i = 0; i < attrNames.length; i++) {
        var attrName = attrNames[i]
        if (typeof view[attrName] !== "undefined") {
            savedAttributesCopy[attrName] = view[attrName];
            if (savedAttributesCopy[attrName] != savedAttributes[attrName]) {
                desc.allSubfiguresSameValue[attrName] = false
            }
        }
    }
    return savedAttributesCopy;
}


export function updateParentalProperties(desc) {
    if (desc.allSubfiguresSameValue.allVertical === false && desc.allSubfiguresSameValue.allHorizontal === false) {
        desc.allSubfiguresSameValue.arrangement = false;
    } else {
        desc.allSubfiguresSameValue.arrangement = true;
    }

    if (typeof desc.top.domain.xDomain !== "undefined" | !desc.allSubfiguresSameValue.xDomain) {
        desc.top.domain.xFullGenome = false;
    }
    if (typeof desc.top.domain.yDomain !== "undefined" | !desc.allSubfiguresSameValue.yDomain) {
        desc.top.domain.yFullGenome = false;
    }
}


