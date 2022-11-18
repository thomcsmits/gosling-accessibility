function createTree(desc) {
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

function renderTree(treeObj) {
    var treeEl = document.getElementById("GoslingFigureTreeView");
    treeEl.appendChild(createTree(treeObj));
} 

// As of now, this is only a set-up to be expanded upon, since currently the tree is only collapsible with mouse, and there is no keeping track of what element is selected (and thus not accessible)
function addToggle() {
    var elements = document.getElementsByClassName("caret");
    Array.from(elements).forEach(function(element) {
        element.addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
      })
    })
}


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
                var tree = desc2tree(descSpec);
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