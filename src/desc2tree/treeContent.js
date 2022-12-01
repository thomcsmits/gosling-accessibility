export function desc2treeText(desc) {
    descCopy = JSON.parse(JSON.stringify(desc));
    
    var treeText = new Object();

    treeText['The title is'] = descCopy.title
    treeText['The subtitle is'] = descCopy.subtitle
    treeText['The number of subfigures is'] = descCopy.nTracks

    treeText = Object.assign(treeText, descCopy, {title : undefined, subtitle : undefined, nTracks : undefined});

    treeText.additionalInformation = new Object();

    treeText.additionalInformation.top = treeText.top;
    treeText.additionalInformation.data = treeText.data;
    treeText.additionalInformation.allSubfiguresSameValue = treeText.allSubfiguresSameValue;

    delete treeText.top;
    delete treeText.data;
    delete treeText.allSubfiguresSameValue;

    for (subfig in tree.structure) {
        var temporaryTree = {"Type of chart": treeText.structure[subfig].specialDesc, "Type of mark": treeText.structure[subfig].mark, Data: treeText.structure[subfig].data, Axes: treeText.structure[subfig].axes, additionalInformation: new Object()}
        temporaryTree.additionalInformation = Object.assign({}, treeText.structure[subfig])
        delete temporaryTree.additionalInformation.specialDesc;
        delete temporaryTree.additionalInformation.mark;
        delete temporaryTree.additionalInformation.data;
        delete temporaryTree.additionalInformation.axes;
        treeText.structure[subfig] = temporaryTree
        
    }

    if (descCopy.nTracks == 1) {
        delete treeText.additionalInformation.allSubfiguresSameValue;
        treeText.structure = Object.assign({}, tree.structure.subfig0)
        delete treeText.structure.subfig0;
        delete treeText.structure.additionalInformation.number;
        delete treeText.structure.additionalInformation.rowNumber;
        delete treeText.structure.additionalInformation.colNumber; 
    }
    return treeText;
}