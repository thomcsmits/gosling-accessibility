function desc2tree(desc) {
    descCopy = JSON.parse(JSON.stringify(desc));
    
    var tree = new Object();

    tree['The title is'] = descCopy.title
    tree['The subtitle is'] = descCopy.subtitle
    tree['The number of subfigures is'] = descCopy.nTracks

    tree = Object.assign(tree, descCopy, {title : undefined, subtitle : undefined, nTracks : undefined});

    tree.additionalInformation = new Object();

    tree.additionalInformation.top = tree.top;
    tree.additionalInformation.data = tree.data;
    tree.additionalInformation.allSubfiguresSameValue = tree.allSubfiguresSameValue;

    delete tree.top;
    delete tree.data;
    delete tree.allSubfiguresSameValue;

    for (subfig in tree.structure) {
        var temporaryTree = {"Type of chart": tree.structure[subfig].specialDesc, "Type of mark": tree.structure[subfig].mark, Data: tree.structure[subfig].data, Axes: tree.structure[subfig].axes, additionalInformation: new Object()}
        temporaryTree.additionalInformation = Object.assign({}, tree.structure[subfig])
        delete temporaryTree.additionalInformation.specialDesc;
        delete temporaryTree.additionalInformation.mark;
        delete temporaryTree.additionalInformation.data;
        delete temporaryTree.additionalInformation.axes;
        tree.structure[subfig] = temporaryTree
        
    }

    if (descCopy.nTracks == 1) {
        delete tree.additionalInformation.allSubfiguresSameValue;
        tree.structure = Object.assign({}, tree.structure.subfig0)
        delete tree.structure.subfig0;
        delete tree.structure.additionalInformation.number;
        delete tree.structure.additionalInformation.rowNumber;
        delete tree.structure.additionalInformation.colNumber; 
    }
    return tree;
}