const specsDev = require("./spec-dev/specs-custom")
const specsExample = require("./spec-examples/specs-examplatory")
const gos2acc = require("./gos2acc")
const acc2text = require("./acc2text")

const spec = specsDev.example1

descSpec = gos2acc.gos2desc(spec)
textSpec = acc2text.desc2text(descSpec)

console.log(descSpec)
console.log(textSpec)


const updateExampleOutput = false;
// if updateExampleOutput is set to true, then the description for examples in the folder 'spec-examples' are written to the the 'output' folder in this folder. 

if (updateExampleOutput) {
    const fs = require("fs")
    for (let i = 0; i < 5; i += 1) {
        example = specsExample["example" + i]
        textSpec = acc2text.desc2text(gos2acc.gos2desc(example))

        // save output as its own text file
        fs.writeFile("./spec-examples/output/example" + i + ".txt", textSpec, err => {
        if (err) {
            console.error(err);
        }
        });
    }
}