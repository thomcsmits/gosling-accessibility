const specsSurvey = require("./spec-examples/specs/specs-survey")
const gos2acc = require("./gos2acc")
const acc2text = require("./acc2text")

const spec = specsSurvey.example_1_bar

descSpec = gos2acc.gos2desc(spec)
console.log(descSpec)

textSpec = acc2text.desc2text(descSpec)
console.log(textSpec)


const updateExampleOutput = false;
// if updateExampleOutput is set to true, then the description for examples in the folder 'spec-examples' are written to the the 'output' folder in this folder. 

var exampleNames = ["example_1_bar", "example_2_heatmap", "example_3_ideogram_simple", "example_4_text", "example_5_rule_mark", "example_6_circos", "example_7_vis_enc", "example_8_circ_enc", "example_9_withinlink", "example_10_brushing", "example_11_matrix", "example_12_corces"]

if (updateExampleOutput) {
    const fs = require("fs")
    for (let i = 0; i < exampleNames.length; i ++) {
        console.log(exampleNames[i])
        example = specsSurvey[exampleNames[i]]
        textSpec = acc2text.desc2text(gos2acc.gos2desc(example)).textLong

        //save output as its own text file
        fs.writeFile("./spec-examples/output/example" + (i+1) + ".txt", textSpec, err => {
        if (err) {
            console.error(err);
        }
        });
    }
}