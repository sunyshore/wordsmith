function getword(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  // shouldn't make a new tab
      url: "http://wordsmith.qc24.xyz/?word=" + info.selectionText
    });
  }
  chrome.contextMenus.create({
    title: "Search: %s", 
    contexts:["selection"], 
    onclick: getword
  });