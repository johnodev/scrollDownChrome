chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {	  
	var scroolDownAmount = request.scrollPixelAmt;
	window.scrollBy(0,Number(scroolDownAmount));
	sendResponse({success: true});
  });