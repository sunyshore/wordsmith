/*function getword(info, tab) {
    fetch('http://wordsmith.qc24.xyz/?word=death') // ask lukas how this works
        .then(response => response.json())
        .then(data => console.log(data));
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  // shouldn't make a new tab
        url: "http://wordsmith.qc24.xyz/?word=" + info.selectionText
    });
}*/
// this block updates the menu u get when u right click on chrome
chrome.contextMenus.create({
    id: "selectionGetter",
    title: "Wordsmith search",
    contexts: ["selection"]
});

/*
selection stuf??? doesnt work:
    const paragraphElement = document.getElementById('word')
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    paragraphElement.innerHTML = text;
*/

chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
  }, function(selection) {
    document.getElementById("word").value = selection[0];
  });
