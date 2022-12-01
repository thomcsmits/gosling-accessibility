import { gos2desc } from "../src/gos2desc/index.js";
import { desc2text } from "../src/desc2text/index.js";
import { desc2treeText } from "../src/desc2tree/treeContent.js";
import { createFullTree, addToggle } from "../src/desc2tree/createTree.js";

export function showInput() {
    var inputSpec = document.getElementById("inputSpec").value;

    try {
        var inputSpecJSON = JSON.parse(inputSpec);
        try {
            var descSpec = gos2desc(inputSpecJSON);
            try {
                var description = desc2text(descSpec);
            } catch {
                alert("Error encountered in creating text!")
            }
            try {
                var treeText = desc2treeText(descSpec);
            } catch {
                alert("Eroor encountered in creating tree!")
            } 
        } catch {
            alert("Error encountered in extracting elements!")
        }
    } catch{
        alert("Input is not in JSON format!")
    }

    document.getElementById('displayTextAlt').innerHTML = description.textAlt;
    document.getElementById('displayTextLong').innerHTML = description.textLong;

    createFullTree(treeText)
    addToggle()
}