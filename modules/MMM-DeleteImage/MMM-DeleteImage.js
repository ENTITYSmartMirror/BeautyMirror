/* global Module */

/* Magic Mirror
 * Module: MM Hide All
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */
var DeleteImageS;
Module.register("MMM-DeleteImage",{
	defaults: {},
    start: function (){
        DeleteImageS = this;
    },
	getScripts: function() {
		return ["modules/MMM-DeleteImage/js/jquery.js"];
	},

	getStyles: function() {
		return ["MMM-DeleteImage-style.css"];
	},
	
	getDom: function() {
		var wrapper = document.createElement("div");
		var button = document.createElement("div");
		var text = document.createElement("span");
		var overlay = document.createElement("div");
		var hidden = true;
		
		overlay.className = "paint-it-black";
		
		button.className = "hide-toggle";
		button.appendChild(text);
		text.innerHTML = "끝내기";
		
		wrapper.appendChild(button);
		wrapper.appendChild(overlay);
		
		$(button).on("click", function(){
			if(hidden){

				//DeleteImageS.sendNotification("REMOTE_ACTION", {action: "MONITOROFF"});
				DeleteImageS.sendNotification("REMOTE_ACTION", {action: "REFRESH"});
				DeleteImageS.sendNotification("setDefault")
				DeleteImageS.sendSocketNotification("DELETEall")
				$(text).html('New');
				hidden = false;
			}else{
				$(overlay).fadeOut(1000);
				$(button).fadeTo(1000, 1);
				$(text).html('끝내기');
				hidden = true;
			}
		});
		
		return wrapper;
	},
	notificationReceived: function(notification, payload) {
		Log.info(this.name + " - received notification: " + notification);
		
		if(notification === "DELETEstart"){
			//console.log("this a ", this.config.a)
			DeleteImageS.sendSocketNotification("DELETE");
			
		}
		
/*
		if(notification === "LOADINGAFTER"){
			console.log("this a ", this.config.a)
			this.config.a=3;

		}
*/
	},
	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
		  case "DELETEgood":
			console.log("Delete Socket recevied payload1: "+payload)
			//var baelem = document.getElementById("BeforeAfterClickid")
			DeleteImageS.sendNotification("setDefault")
			//
			//BeforeAfterMoudule.sendNotification('SHOWCHANGEDIMAGE');
			//
			//baelem.innerHTML = "자르기 전 사진찍기 완료!"
		break
		  
		}
	  }
	
});
