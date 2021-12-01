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
				// 모든 모듈을 Default 상태로 notification 전달
				DeleteImageS.sendNotification("setDefault")
				// 사진 앨범 삭제 socketnotification 전달
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
	// 카메라 앨범삭제 테스트용
	notificationReceived: function(notification, payload) {
		Log.info(this.name + " - received notification: " + notification);
		if(notification === "DELETEstart"){
			DeleteImageS.sendSocketNotification("DELETE");
		}
	},
	// 카메라앨범 삭제 및 초기화, python으로 삭제함
	socketNotificationReceived: function(notification, payload) {
		switch(notification) {
		  case "DELETEgood":
			console.log("Delete Socket recevied payload1: "+payload)
			DeleteImageS.sendNotification("setDefault")
		break
		}
	  }
});
