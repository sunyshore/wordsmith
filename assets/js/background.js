const CONTEXT_MENU_ID = "wordsmith-contextmenu"

function getData(word) {
    // Fetch from fastapi.
    fetch(`https://shaped-entropy-323617.rj.r.appspot.com/?word=${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Send the data from the api to our content script
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
                    console.log(response);
                });
            });
        });
}

chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "Wordsmith search",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === CONTEXT_MENU_ID) {
        getData(info.selectionText);
    }
});