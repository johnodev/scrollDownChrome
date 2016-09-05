console.log("content.js");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  
	window.scrollBy(0,100);  
	console.log("content.js v3");  
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });