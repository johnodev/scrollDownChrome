console.log("extension.js");

function getSpeed(){
	var speed = 3000;
	var options = document.getElementsByName("speed");
	if (options) {
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked){
				 speed = Number(options[i].value);
			}
		}
	}
	return speed;
}

var app = new (function(){
	var self = this;
	self.isScrolling = false,
	self.text = {
		setBtn : function(){
			var SCROLL = "scroll";
			var STOP = "stop";			
			var updatedText = (self.isScrolling)? STOP : SCROLL;

			console.log("this.isScrolling " + self.isScrollicng);
			document.getElementById('toggleScroll').innerText=updatedText;
		}
	}
	self.intervalId = null,
	self.scroll = function(){
		self.intervalId = window.setTimeout(this.run, getSpeed());
	},
	self.run=function(){		
		console.log("extension.js v3");
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
			console.log(response.farewell);
		  });
		});

		if(!self.isScrolling){
			window.clearTimeout(self.intervalId);	
		}else{
			self.scroll();		
		}
	}
});


document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('toggleScroll');
	console.log("trying to scroll")
	
    startBtn.addEventListener('click', function() {
        app.isScrolling = !app.isScrolling; 
		if(app.isScrolling){
			app.scroll();
		}
		app.text.setBtn();
		
    });
	
	
});
