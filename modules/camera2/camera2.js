'use strict';

var cameravar2;
Module.register("camera2", {

    counter: null,
	// Default module config.
	defaults: {
		hidebutton:0,
        selfieInterval: 3,
		emailConfig: {
			service: 'Hotmail',
			auth: {
				user: '<name@email.com>',
				pass: '<password>'
			}
		}
	},
    
	display: true,

	cameraPreview: null,
	snapshot: null,
	camera2: null,
	image: null,
	processing: true,
	message: null,
	commands: null,

    getScripts: function() {
		return ["webcam.js"];
	},

    start: function() { 
		// Delete message
		cameravar2=this;
		this.message = "";
        this.sendSocketNotification('INIT_MAILER', this.config);
    },

	makeSelfie: function(){
		var self = this;
		var timer = 1;
		var interval = setInterval(function() {
			if (timer === 4) {
				clearInterval(interval);
				self.createSnapshot();
			}
			else {
				self.counter.innerHTML = timer;
				timer++;
			}
		}, 1000);
	},

	createSnapshot: function() {
		var self = this;
		this.processing = true;
		Webcam.snap(function (data_uri, canvas, context) {
          var data = data_uri;
		  if (self.image == null){
			    self.image = document.createElement("img");
				
				self.image.width = 640;
				self.image.height = 480;
				self.snapshot.appendChild(self.image);
		  }
		  self.image.src = data_uri;

		  self.cameraPreview.style.display = 'none';
		  self.sendSocketNotification('SEND_EMAIL',  { config: self.config, dataUrl:data_uri } );
		  self.commands.innerHTML = "Your selfie will be emailed to you";
		  setTimeout(function(){
			  self.commands.innerHTML = self.message;
		  }, 3000);
		  self.processing = false;
		});
	},

	// Override dom generator.
	getDom: function() {

        var wrapper = document.createElement("div");

		if (this.display) {
			// if (this.camera === null) {

				this.camera2= document.createElement("div");
				this.counter = document.createElement("div")
				this.counter.style = "text-align: center; padding-bottom: 10px;";
				this.counter.className = "large normal";

				this.camera2.appendChild(this.counter);
				this.cameraPreview = document.createElement("div");
				this.camera2.appendChild(this.cameraPreview);
				this.snapshot = document.createElement("div");
				this.camera2.appendChild(this.snapshot)
				this.commands = document.createElement("div");
				this.commands.innerHTML = this.message;
				this.commands.className = "small light dimmed";
				this.commands.style = "padding-top: 10px;"
				this.camera2.appendChild(this.commands);

				wrapper.appendChild(this.camera2);
				// default camera
				if(this.config.hidebutton==0){
				Webcam.set({
					width:640,
					height: 480,
					image_format: 'jpeg',
					jpeg_quality: 90,
					constraints: {
						mandatory: {
							minWidth: 320,
							minHeight: 160
						},
						optional: [
							{ minFrameRate: 60 }
						]
					}
				});
			}
			// click hide button
			else if(this.config.hidebutton==1){
				Webcam.set({
					width: 1280,
					height: 1920,
					image_format: 'jpeg',
					jpeg_quality: 90,
					constraints: {
						mandatory: {
							minWidth: 640,
							minHeight: 480
						},
						optional: [
							{ minFrameRate: 60 }
						]
					}
				});
			}

				Webcam.attach(this.cameraPreview);

		}
		else {
			if (this.camera2 != null){
				Webcam.reset();
				this.camera2.style = "visibility:hidden;";
			}
			
		}
		
        return wrapper;
	},

    notificationReceived: function(notification, payload, sender) {
		if (notification === "SHOW_CAMERA" && this.display === false){
			this.display = true;
			this.updateDom(500);
		}
		
        if (notification === "HIDE_CAMERA" && this.display == true){
			this.display = false;
			this.updateDom(500);
		}
		
        if (notification === "SELFIE"){
			if (!this.processing && this.display){
				this.makeSelfie();
			}
		}
		// camera off 
		if (notification === "camera_stop"){
			this.display = false;
			this.processing = false;
			this.updateDom();
		}
		//camrea on
		if (notification === "camera_start"){
			this.display = true;
			this.processing = true;
			this.updateDom();
		}
		// hide button toggle
		if (notification === "only_camera"){
			this.config.hidebutton=1;
			this.updateDom(500);
		}
		// hide button toggle
		if (notification === "show_camera"){
			this.config.hidebutton=0;
			this.updateDom(500);
		}
		

	},

});