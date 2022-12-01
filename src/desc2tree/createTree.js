export function createFullTree(treeObj) {
    var tree = createInnerTree(treeObj);
    
    var treeRoot = document.getElementById("GoslingFigureTreeView");

    var treeRootList = document.createElement("ul");
    var treeRootListItem = document.createElement("li");
    var span = document.createElement("span");
    span.classList.add('caret');
    var treeRootListItemText = document.createTextNode("Gosling Figure");
    span.appendChild(treeRootListItemText);
    var div = document.createElement("div");
    div.id = "TreeView";

    div.appendChild(tree);
    treeRoot.appendChild(ul);
} 


function createInnerTree(desc) {
    var ul = document.createElement("ul");
    ul.classList.add('nested');

    for (key in desc) {
        if (typeof desc[key] !== "undefined") {
            var li = document.createElement("li");

            if (typeof desc[key] !== "object") {
                var text = document.createTextNode(key + ": " + desc[key]);
                li.appendChild(text);
            } else {
                var span = document.createElement("span");
                span.classList.add('caret');
                
                var text = document.createTextNode(key);
                span.appendChild(text);

                li.appendChild(span);
                
                li.appendChild(createTree(desc[key]));
            }
            ul.appendChild(li);
        }
    }
    return ul;
}


// As of now, this is only a set-up to be expanded upon, since currently the tree is only collapsible with mouse, and there is no keeping track of what element is selected (and thus not accessible)
export function addToggle() {
    var elements = document.getElementsByClassName("caret");
    Array.from(elements).forEach(function(element) {
        element.addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
      })
    })
}