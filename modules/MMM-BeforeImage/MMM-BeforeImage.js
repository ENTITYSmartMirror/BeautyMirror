/* global Module */

/* MMM-ImageSlideshow.js
 * 
 * Magic Mirror
 * Module: MMM-ImageSlideshow
 * 
 * Magic Mirror By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 * 
 * Module MMM-ImageSlideshow By Adam Moses http://adammoses.com
 * MIT Licensed.
 */

 
var BeforeImages;
Module.register("MMM-BeforeImage", {

	// Default module config.
	defaults: {
        // an array of strings, each is a path to a directory with images
        imagePaths: [ 'modules/MMM-ImageSlideshow/exampleImages' ],
        // the speed at which to switch between images, in milliseconds
		slideshowSpeed: 10 * 50,
        // if zero do nothing, otherwise set width to a pixel value
        fixedImageWidth: 0,
        // if zero do nothing, otherwise set height to a pixel value        
        fixedImageHeight: 0,
        // if true randomize image order, otherwise do alphabetical
        randomizeImageOrder: false,
        // if true combine all images in all the paths
        // if false each path with be viewed seperately in the order listed
        treatAllPathsAsOne: false,
		// 이미지 reload시 파일리스트
		reloadImageList: true,
        // if true, all images will be made grayscale, otherwise as they are
        makeImagesGrayscale: false,
        // list of valid file extensions, seperated by commas
        validImageFileExtensions: 'bmp,jpg,gif,png',
		// a delay timer after all images have been shown, to wait to restart (in ms)
		delayUntilRestart: 0,
		a:0,
		complete:0
	},
    // load function
	start: function () {
		BeforeImages = this;
        // add identifier to the config
        this.config.identifier = this.identifier;
        // ensure file extensions are lower case
        this.config.validImageFileExtensions = this.config.validImageFileExtensions.toLowerCase();
        // set no error
		this.errorMessage = null;
        if (this.config.imagePaths.length == 0) {
			this.errorMessage = "MMM-ImageSlideshow: Missing required parameter."
        }
        else {
            // create an empty image list
            this.imageList = [];
            // set beginning image index to -1, as it will auto increment on start
            this.imageIndex = -1;
            // ask helper function to get the image list
            console.log("MMM-ImageSlideshow sending socket notification");
            this.sendSocketNotification('IMAGESLIDESHOW_REGISTER_CONFIG', this.config);
			// do one update time to clear the html
			this.updateDom();
			// set a blank timer
			this.interval = null;
			// 동적으로 사진띄우기 위해 loaded 설정
			this.loaded = false;
        }
	},
	// Define required scripts.
	getStyles: function() {
        // the css contains the make grayscale code
		return ["imageslideshow.css"];
	},    
	// the socket handler
	socketNotificationReceived: function(notification, payload) {
                console.log("MMM-ImageSlideshow recieved a socket notification: " + notification);
		// if an update was received
		if (notification === "IMAGESLIDESHOW_FILELIST") {
			// check this is for this module based on the woeid
			if (payload.identifier === this.identifier)
			{
				var newImageList = payload.imageList;
				if (newImageList.length == this.imageList.length) {
					var unchanged = true;
					for (var i = 0 ; i < newImageList.length; i++) {
						unchanged = this.imageList[i] == newImageList[i];
						if (!unchanged)
							break;
					}
					if (unchanged)
						return;
				}
				// set the image list
				this.imageList = payload.imageList;
                // if image list actually contains images
                // set loaded flag to true and update dom
				// 새로운 사진 Update
                if (this.imageList.length > 0 && !this.loaded) {
                    this.loaded = true;
                    this.updateDom();
					// set the timer schedule to the slideshow speed			
					var self = this;
					this.interval = setInterval(function() {
						self.updateDom();
						}, this.config.slideshowSpeed);					
                }
			}
		}
    },    
	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
        // if an error, say so (currently no errors can occur)
        if (this.errorMessage != null) {
            wrapper.innerHTML = this.errorMessage;
        }
        // if no errors
        else {
            // if the image list has been loaded
            if (this.loaded === true) {
				// if was delayed until restart, reset index reset timer
				if (this.imageIndex == -2) {
					this.imageIndex = -1;
					clearInterval(this.interval);
					var self = this;
					this.interval = setInterval(function() {
						self.updateDom(0);
						}, this.config.slideshowSpeed);						
				}				
                // iterate the image list index
                this.imageIndex += 1;
				// set flag to show stuff
				var showSomething = true;
                // if exceeded the size of the list, go back to zero
                if (this.imageIndex == this.imageList.length) {
                                       // 이미지 reload
                                       if (this.config.reloadImageList) 
                                           this.sendSocketNotification('IMAGESLIDESHOW_RELOAD_FILELIST', this.config);
					// if delay after last image, set to wait
					if (this.config.delayUntilRestart > 0) {
						this.imageIndex = -2;
						wrapper.innerHTML = "&nbsp;";
						showSomething = false;
						clearInterval(this.interval);
						var self = this;
						this.interval = setInterval(function() {
							self.updateDom(0);
							}, this.config.delayUntilRestart);									
					}
					// if not reset index
					else
						this.imageIndex = 0;
				}
				if (showSomething) {
					// create the image dom bit
					var image = document.createElement("img");
					image.id="imgid";
					// 'Before사진 찍기' 시작하기 클릭시
					image.addEventListener("click", () => {
						BeforeImages.sendNotification("camera_stop")
						console.log(" image click !!!!!");
						// 로딩중 화면을 띄우기
						this.config.a=3;
						// BeforeAfter 모듈에게 python으로 사진찍기 위한 신호 전달
						BeforeImages.sendNotification("BEFOREIMAGECLICK");
                        });
					if (this.config.makeImagesGrayscale)
						image.className = "desaturate";
					// create an empty string
					var styleString = '';
					// if width or height or non-zero, add them to the style string
					if (this.config.fixedImageWidth != 0)
						styleString += 'width:' + this.config.fixedImageWidth + 'px;';
					if (this.config.fixedImageHeight != 0)
						styleString += 'height:' + this.config.fixedImageHeight + 'px;';
					// if style string has antyhing, set it
					if (styleString != '')
						image.style = styleString;
					//imgaeList = modules/MMM-BeforeAfter/before 저장해놓은 사진 load
					//클릭해주세요 이미지
					if(this.config.a==0){
					image.src = this.imageList[0];
					}
					// 찍혀진 사진 출력
					if(this.config.a==1){
						image.src = this.imageList[this.imageList.length-1];
						}
					// AfterImage 사진 찍기 완료
					if(this.config.a==2){
						// Before 이미지 띄우기
						image.src = this.imageList[this.imageList.length-2];
						this.config.complete=1;
						BeforeImages.sendNotification("camera_start");
						}
					// 로딩이미지
					if(this.config.a==3){
						image.src = this.imageList[2];
						}
					wrapper.appendChild(image);					
				}
            }
            else {
                // if no data loaded yet, empty html
                wrapper.innerHTML = "&nbsp;";
            }
        }
        // return the dom
		return wrapper;
	},
	notificationReceived: function(notification, payload) {
		Log.info(this.name + " - received notification: " + notification);
		if(notification === "DOM_OBJECTS_CREATED"){
			// 모듈이 시작할땐 모든 사진 초기화
			BeforeImages.sendNotification("DELETEstart");
		}
		// 사진데이터 초기화와 모든 모듈 재시작
		if(notification === "Modules All Change"){
			if(BeforeImages.config.complete===1){
				console.log("complete what :"+BeforeImages.config.complete);
				BeforeImages.sendNotification("DELETEstart");
				BeforeImages.config.complete=0;
			}
		}
		// beforeimage가 찍혔을때
		if(notification === "BEFOREIMAGE"){
			this.config.a=1;
		}
		// 기본값으로 돌아가기
		if(notification === "setDefault"){
			this.config.a=0;
		}
		// Afterimage
		if(notification === "AFTERIMAGE"){
			this.config.a=2;
		}
		//로딩중이미지 출력
		if(notification === "LOADINGBEFORE"){
			this.config.a=3;
		}
	}
});