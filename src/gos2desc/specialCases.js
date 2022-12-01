export function determineSpecialCases(track, subfig) {
    try {
        if (track.mark === "point" && track.x.type === "quantitative" & track.y.type === "quantitative") {
            subfig.specialDesc = "scatter plot"
        }
    } catch (error) {}

    try {
        if (track.mark === "line" && track.x.type === "genomic" & track.y.type === "quantitative") {
            subfig.specialDesc = "line chart"
        }
    } catch (error) {}

      
    try {
        if (track.mark === "bar" && track.x.type === "genomic" & track.y.type === "quantitative") {
            subfig.specialDesc = "bar chart"
        }
    } catch (error) {}

    try {
        if (track.mark === "rect" && track.x.type === "genomic" & track.xe.type === "genomic" & track.color.type === "quantitative") {
            subfig.specialDesc = "heatmap"
        }
    } catch (error) {}

    try {
        if (track.mark === "rect" && track.x.type === "genomic" & track.xe.type === "genomic" & track.color.type === "nominal") {
            subfig.specialDesc = "ideogram"
        }
    } catch (error) {}
}