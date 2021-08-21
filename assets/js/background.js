function getword(info, tab) {
    fetch('http://wordsmith.qc24.xyz/?word=death') // ask lukas how this works
        .then(response => response.json())
        .then(data => console.log(data));
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  // shouldn't make a new tab
        url: "http://wordsmith.qc24.xyz/?word=" + info.selectionText
    });
}
// this block updates the menu u get when u right click on chrome
chrome.contextMenus.create({
    title: "Search: %s",
    contexts: ["selection"],
    onclick: getword
});
