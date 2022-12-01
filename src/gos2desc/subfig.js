import { determineSpecialCases } from "./specialCases.js";

export function describeSubfig(track, counter, savedAttributes, desc, oneTrackInView = true, oneMarkInView = true, onlyDifferenceInMark = null) {
    var subfig = new Object();
    subfig.number = counter.countTracks;
    subfig.rowNumber = counter.rowViews;
    subfig.colNumber = counter.colViews;
    subfig.multiTrackView = {"oneTrackInView": oneTrackInView, "oneMarkInView": oneMarkInView, "onlyDifferenceInMark": onlyDifferenceInMark}
    subfig.title = track.title;
    subfig.assembly = savedAttributes.assembly;
    subfig.layout = savedAttributes.layout;
    
    if (oneMarkInView) {
        subfig.mark = track.mark;
    }

    subfig.data = new Object()

    var nSources = Object.keys(desc.data.dataSource).length;
    if (typeof track.data.url !== "undefined") {
        if (desc.data.dataSource.hasOwnProperty(track.data.url)) {
            subfig.data.dataSource = desc.data.dataSource[track.data.url]
        } else {
            if (nSources > 0) {
                desc.allSubfiguresSameValue.dataSource = false;
            }
            desc.data.dataSource[track.data.url] = nSources + 1
            subfig.data.dataSource = nSources + 1
        }
    } else if (typeof track.data.type === "json" && subfig.data.values.length > 25) {
        if (nSources > 0) {
            desc.allSubfiguresSameValue.dataSource = false;
        }
        desc.data.dataSource["newJsonSource" + nSources] = nSources + 1
        subfig.data.dataSource = nSources + 1
    }

    if (typeof track.data.categories !== "undefined") {
        subfig.data.categories = track.data.categories;
        subfig.data.nCategories = track.data.categories.length;
        if (typeof desc.data.categories === "undefined") {
            desc.data.categories = track.data.categories;
        } else {
            if (track.data.categories.join() !== desc.data.categories.join()) {
                desc.allSubfiguresSameValue.categories = false;
            }
        }
    }

    if (typeof track.data.binSize !== "undefined") {
        subfig.data.binSize = track.data.binSize * 256
    }


    subfig.axes = new Object();


    const channelOptions = ["x", "xe", "y", "ye", "x1", "x1e", "y1", "y1e", "row", "size", "text", "color", "stroke", "strokeWidth", "opacity"]

    for (const channel in track) {
        if (channelOptions.includes(channel)) {
            // only if the visual channel is encoded with a field, is it a variable. It can also be set to a constant value.
            if (track[channel].hasOwnProperty("field")){
                subfig.axes[channel] = track[channel]
            }
            
        }
    }

    if (oneMarkInView) {
        determineSpecialCases(track, subfig)
    }

    if (typeof track.x !== "undefined") {
        if (typeof track.x.domain !== "undefined") {
            subfig.xDomain = track.x.domain;
            if (subfig.xDomain != savedAttributes.xDomain) {
                desc.allSubfiguresSameValue.xDomain = false;
            }
        } else {
        subfig.xDomain = savedAttributes.xDomain;
        }
    }
    if (typeof track.y !== "undefined") {
        if (typeof track.y.domain !== "undefined") {
            subfig.yDomain = track.y.domain;  
            if (subfig.yDomain != savedAttributes.yDomain) {
                desc.allSubfiguresSameValue.yDomain = false;
            }
        } else {
        subfig.yDomain = savedAttributes.yDomain;
        }
    }

    // how to summarise the description: 
    if (oneMarkInView) {
        subfig.description = summarisePlot(subfig)
    }
    

    return subfig
}

function summarisePlot(subfig) {
    var textSubfig;
    if (!subfig.multiTrackView.oneTrackInView) {
        if (subfig.multiTrackView.onlyDifferenceInMark) {
            if (subfig.alignment === "stack") {
                textSubfig = "stacked plot (with " + subfig.nOverlayed + " tracks) marked with " +  subfig.mark.slice(0, -1).join(", ") + " and " + subfig.mark.slice(-1)
                return textSubfig;
            } else {
                textSubfig = "overlayed plot (with " + subfig.nOverlayed + " tracks) marked with " + subfig.mark.slice(0, -1).join(", ") + " and " + subfig.mark.slice(-1)
                return textSubfig;
            }
        } else {
            textSubfig = "overlayed plot (with " + subfig.nOverlayed + " tracks)"
            return textSubfig;
        }  
    } else {
        if (typeof subfig.specialDesc !== "undefined") {
            return subfig.specialDesc;
        } else {
            textSubfig = "plot marked with " + subfig.mark
            return textSubfig;
        }
    }
}

export function describeSubfigMultipleTracksInView(specPart, counter, savedAttributes, desc) {

    // scenario: only extra specification with multiple tracks is multiple mark types
    if (Object.keys(specPart.tracks[0]).join() === Array("mark").join()) {
        subfig = describeSubfig(specPart, counter, savedAttributes, desc, oneTrackInView = false, oneMarkInView = false, onlyDifferenceInMark = true)
        var mark = new Array(specPart.tracks.length);
        for (let i = 0; i < specPart.tracks.length; i++) {
            mark[i] = specPart.tracks[i].mark;
        }
        // removing brush as a mark, checking if it is now a 'normal' track
        let index = mark.indexOf("brush");
        if (index !== -1) {
            mark.splice(index, 1);
        }
        if (mark.length === 1) {
            subfig.multiTrackView = {"oneTrackInView": true, "oneMarkInView": true, "onlyDifferenceInMark": null}
            subfig.mark = mark[0];
            subfig.brush = true;
        } else {
            subfig.mark = mark;
        }
    } 
    // scenario: 2 stacked full specifications
    // scenario: complicated overlay / other
    else {
        subfig = new Object()
        subfig.number = counter.countTracks
        subfig.rowNumber = counter.rowViews;
        subfig.colNumber = counter.colViews;
        subfig.multiTrackView = {"oneTrackInView": false, "oneMarkInView": null, "onlyDifferenceInMark": false}
    }

    subfig.nOverlayed = specPart.tracks.length;

    subfig.description = "overlayed plot (with " + subfig.nOverlayed + " tracks)";
    
    // var temporaryTop = JSON.parse(JSON.stringify(specPart));
    // delete temporaryTop.tracks;
    // for (let i = 0; i < subfig.nOverlayed; i++) {
    //     subfig.layers[i] = new Object();
    //     Object.obtain(subfig.layers[i], temporaryTop);
    // }

    // for top things: iterate
    // for nTracks: iterate
    // stacked or overlayed

    return subfig
}


