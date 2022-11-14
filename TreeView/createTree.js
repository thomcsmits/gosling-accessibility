function createTree(desc) {
    var ul = document.createElement("ul");
    ul.classList.add('nested');

    for (key in desc) {
        var li = document.createElement("li");

        if (typeof desc[key] !== "object") {
            var text = document.createTextNode(key + ": " + desc[key]);
            li.appendChild(text);
        } else {
            var span = document.createElement("span");
            span.classList.add('caret');
            li.appendChild(span);

            var text = document.createTextNode(key);
            li.appendChild(text);
            
            li.appendChild(createTree(desc[key]));
        }
        ul.appendChild(li);
    }
    return ul;
}

function renderTree(treeObj) {
    var treeEl = document.getElementById("GoslingFigureTreeView");
    treeEl.appendChild(createTree(treeObj));
} 

// As of now, this is only a set-up to be expanded upon, since currently the tree is only collapsible with mouse (and thus not accessible)
var elements = document.getElementsByClassName("caret");
Array.from(elements).forEach(function(element) {
    element.addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
  })
})

function showInput() {
    var inputSpec = document.getElementById("inputSpec").value;
    var inputSpecJSON = JSON.parse(inputSpec)
    
    var descSpec = gos2desc(inputSpecJSON)
    var description = desc2text(descSpec)

    document.getElementById('displayTextAlt').innerHTML = description.textAlt;
    document.getElementById('displayTextLong').innerHTML = description.textLong;

    renderTree(descSpec)
}