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

				DeleteImageS.sendNotification("REMOTE_ACTION", {action: "MONITOROFF"});
				//DeleteImageS.sendNotification("REMOTE_ACTION", {action: "REFRESH"});
				DeleteImageS.sendNotification("setDefault")
				DeleteImageS.sendSocketNotification("DELETE")
				$(text).html('접속');
				hidden = false;
			}else{
				$(overlay).fadeOut(1000);
				$(button).fadeTo(1000, 1);
				$(text).html('끝내기');
				hidden = true;
			}
		});
		
		return wrapper;
	}
});
