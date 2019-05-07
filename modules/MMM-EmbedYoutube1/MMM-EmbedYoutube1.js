
/* Magic Mirror
 * Module: Embed Youtube
 * 
 * v 1.3.3
 * 
 * By Nitipoom Unrrom (aka nitpum) https://nitpum.com
 * MIT Licensed.
 */

Module.register("MMM-EmbedYoutube1", {
	defaults: {
		autoplay: false,
		color: "red",
		controls : true,
		disablekb: false,
		fs: true,
		height: 800,
		width: 1000,
		loop: false,
		modestbranding: false,
		rel : false,
		showinfo : false,
		video_id : "r6A7Fsci7Ds",
		playlist: "",
		
		searchlist1: "쯔위"
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		// Parameter
		var params = "";
		var search_list="&listType=search&list=";
		search_list += this.config.searchlist1;

		params += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		params += (typeof this.config.color !== "undefined" && this.config.color != "red")? "&color=" + this.config.color:"";
		params += (this.config.controls)? "&controls=1":"&controls=0";
		params += (this.config.disablekb)? "&disablekb=1":"";
		params += (this.config.fs)? "":"&fs=0";
		//params += (videoList != "" && (typeof this.config.playlist === "undefined" || this.config.playlist == "")) ? videoList : "&playlist=" + this.config.video_id; // required playlist to loopable
		params += (this.config.loop) ? "&loop=1" : "";
		params += (this.config.modestbranding) ? "&modestbranding=1" : "";
		params += (this.config.rel)? "&rel=1": "&rel=0";
		params += (this.config.showinfo)? "&showinfo=1": "&showinfo=0";
		params += search_list; 

		var videoId = this.config.video_id +"?version=3";
		if (typeof this.config.playlist !== "undefined" && this.config.playlist != "")
			videoId = "playlist?list=" + this.config.playlist + "&";

		wrapper.innerHTML = "<iframe width=\"" 
		+ this.config.width +"\" height=\"" 
		+ this.config.height 
		+ "\" src=\"https://www.youtube.com/embed/" 
		+ videoId + "&"+ params +"\" frameborder=\"0\" allowfullscreen></iframe>";
		return wrapper;
	},
	notificationReceived: function(notification, payload) {
		Log.info(this.name + " - received notification: " + notification);
		
		if(notification === "Modules All Change"){
			this.hide()
		}
		
		if(notification === "PLAYLISTCHANGE"){
			var payload1=payload.split("_");
			console.log("thisconfigid : "+payload)
			this.config.video_id=payload1[0]
			this.config.searchlist1=payload1[1]
			console.log("thisconfigid : "+this.config.searchlist1)
			this.updateDom()

			console.log("thisconfigid : "+this.config.video_id)
		}
	}
});