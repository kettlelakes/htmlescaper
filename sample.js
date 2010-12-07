
function genericOnClick(info, tab) {
  console.log(info.selectionText);
  textToEscape = info.selectionText;
  //escapedText = textToEscape.replace('<', '&lt;').replace('>', '&gt;');
  chrome.tabs.sendRequest(tab.id, {text: textToEscape}, function(response) {
    // do nothing
  });
}
                
var id = chrome.contextMenus.create({"title": 'Escape HTML', "contexts":['editable'],
                                       "onclick": genericOnClick});
