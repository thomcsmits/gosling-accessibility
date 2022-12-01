
export function addTextSubfig(subfig, toReport) {

    var textSubfig = "";

    if (toReport.mark) {
        textSubfig = textSubfig.concat(" " + subfig.description + ".")
    }

    if (!subfig.multiTrackView.oneTrackInView && !subfig.multiTrackView.onlyDifferenceInMark) {
        //textSubfig = textSubfig.concat(" No further features could be extracted for this plot.");
        return textSubfig;
    }
    
    if (toReport.dataSource) {
        textSubfig = textSubfig.concat(" Data is from source " + subfig.data.dataSource + ".");
    }

    textSubfig = describeXY(subfig, toReport, textSubfig)

    if (typeof subfig.data.binSize !== "undefined") {
        textSubfig = textSubfig.concat(" Data is binned in intervals of " + subfig.data.binSize + " bp.");
    }

    if (toReport.categories && typeof subfig.data.categories !== "undefined") {
        if (subfig.data.nCategories === 1) {
            textSubfig = textSubfig.concat(" The only category shown is " + subfig.data.categories[0] + ".");
        } else {
            textSubfig = textSubfig.concat(" The " + subfig.data.nCategories + " different categories shown are: " + subfig.data.categories.slice(0, -1).join(", ") + " and " + subfig.data.categories.slice(-1) + ".");
        }
    }

    var alreadyDescribed = ["x", "xe", "x1", "x1e", "y", "ye", "y1", "y1e"];

    for (const axis in subfig.axes) {

        // check if multiple axis have the same data, and if so, describe them together
        if (!alreadyDescribed.includes(axis)){
            var hasSameField = [axis];
            for (const axis2 in subfig.axes) {
                if (!alreadyDescribed.includes(axis2)) {
                    if (axis2 !== axis) {
                        if (subfig.axes[axis].field === subfig.axes[axis2].field && subfig.axes[axis].type === subfig.axes[axis2].type) {
                            hasSameField = [...hasSameField, axis2];
                            alreadyDescribed = [...alreadyDescribed, axis2];
                        }
                    }
                }
                
            }
            var hasSameFieldText;
            if (hasSameField.length > 1) {
                hasSameFieldText = hasSameField.slice(0, -1).join(", ") + " and " + hasSameField.slice(-1);
            }
            else {
                hasSameFieldText = hasSameField.toString();
            }
            textSubfig = textSubfig.concat(" The " + subfig.axes[axis].type + " field '" + subfig.axes[axis].field + "' is shown with " + hasSameFieldText);


            if (["row", "size", "text", "color"].includes(axis)) {
                if (typeof subfig.axes[axis].legend !== "undefined" && subfig.axes[axis].legend === true) {
                    textSubfig = textSubfig.concat(" (legend shown)")
                }
            }

            textSubfig = textSubfig.concat(".")
        }

    }

    if (toReport.layout && subfig.layout === "circular") {
        textSubfig = textSubfig.concat(" The genome is displayed in a circular way.");
    }

    return textSubfig
}


function describeXY(subfig, toReport, textSubfig) {
    let xValues = ["x", "X-axis", "xDomain", "top", "xe"]
    let yValues = ["y", "Y-axis", "yDomain", "left", "ye"]

    for (const axis in subfig.axes) {
        if (axis === "x" | axis === "y") {
            if (axis === "x") {
                var values = xValues;
            } else {
                var values = yValues;
            }

            // add which axis it is
            textSubfig = textSubfig.concat(" " + values[1])
            
            // add where axis is shown
            if (typeof subfig.axes[values[0]].axis === "undefined") {
                textSubfig = textSubfig.concat(" (" + values[3] + ")");
            } else {
                if (subfig.axes[values[0]].axis === "none") {
                    textSubfig = textSubfig.concat(" (axis not shown)");
                } else {
                    textSubfig = textSubfig.concat(" ("+ subfig.axes[values[0]].axis + ")");
                } 
            } 

            // if genomic
            if (subfig.axes[values[0]].type === "genomic") {

                if (Object.keys(subfig.axes).includes(values[4])) {
                    textSubfig = textSubfig.concat(" shows genomic intervals") 
                } else {
                    textSubfig = textSubfig.concat(" shows genomic positions") 
                }
                
                if (toReport.assembly) {
                    textSubfig = textSubfig.concat(" (" + subfig.assembly + ")");
                }
        
                if (toReport[values[2]]) {
                    if (typeof subfig[values[2]] !== "undefined") {
                        textSubfig = textSubfig.concat(" at chromosome " + subfig[values[2]].chromosome)
                        if (typeof subfig[values[2]].interval !== "undefined") {
                            textSubfig = textSubfig.concat(" in interval (" + subfig[values[2]].interval + ").");
                        } else {
                            textSubfig = textSubfig.concat(".");
                        }
                    } else {
                        textSubfig = textSubfig.concat(" (entire genome is shown).");
                    }
                } else {
                    textSubfig = textSubfig.concat(".")
                }
            } 
            
            // if not genomic
            else {
                textSubfig = textSubfig.concat(" shows the " + subfig.axes[values[0]].type + " field '" + subfig.axes[values[0]].field + "'.")
            }
        }

    }

    return textSubfig;
}