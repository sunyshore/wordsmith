function getword(info, tab) {
    fetch('http://wordsmith.qc24.xyz/?word=death')
        .then(response => response.json())
        .then(data => console.log(data));
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  // shouldn't make a new tab
        url: "http://wordsmith.qc24.xyz/?word=" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "Search: %s",
    contexts: ["selection"],
    onclick: getword
});
