import { desc2treeText } from "./treeContent.js";
import { createFullTree, addToggle } from "./createTree.js";


function showInput() {
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
                var treeText = desc2tree(descSpec);
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

    renderTree(tree)

    addToggle()
}