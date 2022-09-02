const specs = require("./spec-examples/specs-custom")
const gos2acc = require("./gos2acc")
const acc2text = require("./acc2text")

const spec = specs.example1

var countTracks = null;
var countViews = null;

descSpec = gos2acc.gos2desc(spec)
textSpec = acc2text.desc2text(descSpec)

console.log(descSpec)
console.log(textSpec)