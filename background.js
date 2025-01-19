chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "showPopup",
      title: "Copy selected text",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "showPopup" && info.selectionText) {
      chrome.action.openPopup(); // Popup oynasini ochadi
    }
  });
  
chrome.runtime.onInstalled.addListener(() => {  
  chrome.contextMenus.create({
    id: "getSelectedText",
    title: "Get Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "getSelectedText" && info.selectionText) {
    console.log("Selected text:", info.selectionText);
  }
});
