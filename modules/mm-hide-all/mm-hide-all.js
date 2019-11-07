/* global Module */

/* Magic Mirror
 * Module: MM Hide All
 *
 * By EoF https://forum.magicmirror.builders/user/eof
 * MIT Licensed.
 */
var hideall;
Module.register("mm-hide-all",{
	defaults: {},
	start: function(){
		hideall=this;
	},
	getScripts: function() {
		return ["modules/mm-hide-all/js/jquery.js"];
	},

	getStyles: function() {
		return ["mm-hide-all-style.css"];
	},
	
	getDom: function() {
		var wrapper = document.createElement("div");
		var button = document.createElement("div");
		var text = document.createElement("span");
		var overlay = document.createElement("div");
		var hidden = true;
		
		//overlay.className = "paint-it-black";
		
		button.className = "hide-toggle";
		button.appendChild(text);
		text.innerHTML = "Hide";
		
		wrapper.appendChild(button);
		wrapper.appendChild(overlay);
		
		$(button).on("click", function(){
			if(hidden){
				hideall.sendNotification("only_camera");
				/*
				hideall.sendNotification('CHANGE_POSITIONS', 
					modules = {
						'clock':{
							visible: 'true',
							position: 'top_right',
						}
					}
				);
				*/
				//$(overlay).fadeIn(1000);
				$(button).fadeTo(1000, 0.3);
				$(text).html('Show');
				hidden = false;
				
			}else{
				//$(overlay).fadeOut(1000);
				hideall.sendNotification("show_camera");
				
				$(button).fadeTo(1000, 1);
				$(text).html('Hide');
				hidden = true;
				
				
			}
			
				console.log("camera start");
		});
		
		return wrapper;
	}
});
