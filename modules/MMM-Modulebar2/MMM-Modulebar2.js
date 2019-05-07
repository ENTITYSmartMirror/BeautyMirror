/* global Module */

/* Magic Mirror 2
 * Module: MMM-Modulebar
 *
 * By Erik Pettersson
 * Based on the TouchNavigation Module by Brian Janssen
 *
 * MIT Licensed.
 */

//var request = require('request');
var modulebar2;
Module.register("MMM-Modulebar2",{
	
	requiresVersion: "2.1.0",
	
    defaults: {
        // Allow the module to force modules to be shown (if hidden and locked by another module ex. profile-switcher).
        allowForce: true,
        // Determines if the border around the buttons should be shown.
        showBorder: true,
        // The minimum width for all the buttons.
        minWidth: "0px",
        // The minimum height for all the buttons.
        minHeight: "70px",
        // The location of the symbol relative to the text. Options: left, right, top or bottom
        picturePlacement: "left",
        // The direction of the bar. Options: row, column, row-reverse or column-reverse
        direction: "column",
		// The speed of the hide and show animation.
		animationSpeed: 500,
        // The default button 1. Add your buttons in the config.
		buttons: {
			"1": {
				module: "MMM-iFrame10",
				text:   "레이어드",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			
			"2": {
				module: "MMM-iFrame11",
				text:   "보브",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},

			"3": {
				module: "MMM-iFrame12",
				text:   "숏",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			"4": {
				module: "MMM-iFrame13",
				text:   "히메",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			"5": {
				module: "MMM-iFrame14",
				text:   "글램펌",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			"6": {
				module: "MMM-iFrame15",
				text:   "바디펌",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			"7": {
				module: "MMM-iFrame16",
				text:   "히피펌",
				img: "https://image.flaticon.com/icons/svg/1751/1751349.svg",
				width: "50",
				height: "50",
			},
			

		}
    },
    // Define required styles.
	getStyles: function(){
		return ["font-awesome.css", "MMM-Modulebar.css"];
	},
	start () {
		modulebar2 = this;
	},

    // Override dom generator.
    getDom: function() {
        var menu = document.createElement("span");
        menu.className = "modulebar-menu";
        menu.id = this.identifier + "_menu";
        menu.style.flexDirection = this.config.direction;
		// Sends each button to the "createButton" function be created.
		for (var num in this.config.buttons) {
			menu.appendChild(this.createButton(this, num, this.config.buttons[num], this.config.picturePlacement));
		}
        return menu;
    },

	// Creates the buttons.
    createButton: function (self, num, data, placement) {
		// Creates the span elemet to contain all the buttons.
		var item = document.createElement("span");
        // Builds a uniqe indentity / button.
		item.id = self.identifier + "_button_" + num;
        // Sets a class to all buttons.
		item.className = "modulebar-button";
        // Makes sure the width and height is at least the defined minimum.
		item.style.minWidth = self.config.minWidth;
        item.style.minHeight = self.config.minHeight;
		// Collects all modules loaded in MagicMirror.
		var modules = MM.getModules();
		// When a button is clicked, the module either gets hidden or shown depending on current module status.
		item.addEventListener("click", function () {
			// Lists through all modules for testing.
			for (var i = 0; i < modules.length; i++) {
				// Check if the curent module is the one.
				if (modules[i].name === data.module) {
					// Splits out the module number of the module with the same name.
					var idnr = modules[i].data.identifier.split("_");
					// Checks if idnum is set in config.js. If it is, it only hides that module, if not hides all modules with the same name.
					if (idnr[1] == data.idnum || data.idnum == null) {
						// Check if the module is hidden.						if (!modules[i].hidden) {
							// Hides the module.
						if (!modules[i].hidden) {
							// Hides the module.
							modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
							// Prints in the console what just happend (adding the ID). 
							console.log("Hiding "+modules[i].name+" ID: "+idnr[1]);
							// Check if there is a "hideURL" defined.
							if (data.hideUrl != null) {
								// Visiting the the URL.
								fetch(data.hideUrl);
								// Prints the visited hideURL.
								console.log("Visiting hide URL: "+data.hideUrl);
							}
						}
						else {
							// Check if there is a "showURL" defined.
							if (data.showUrl != null) {
							// Visiting the show URL.
								fetch(data.showUrl);
								// Prints the visited hideURL.
								console.log("Visiting show URL: "+data.showUrl);
							}
							if (modules[i].name == 'MMM-iFrame10') {
								for(var num=0; num<17; num++ ){
								console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
								modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
								}
								console.log("Showing "+modules[10].name+" ID: "+idnr[1]);	
								setTimeout(function(){
									modules[10].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);
							}
							else if (modules[i].name == 'MMM-iFrame11') {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
									console.log("Showing "+modules[11].name+" ID: "+idnr[1]);	
									setTimeout(function(){
										modules[11].show(self.config.animationSpeed, {force: self.config.allowForce});
									},500);
							}
							else if (modules[i].name == 'MMM-iFrame12') {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
									console.log("Showing "+modules[12].name+" ID: "+idnr[1]);	
									setTimeout(function(){
										modules[12].show(self.config.animationSpeed, {force: self.config.allowForce});
									},500);
							}
							else if (modules[i].name == 'MMM-iFrame13') {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
									console.log("Showing "+modules[13].name+" ID: "+idnr[1]);	
									setTimeout(function(){
										modules[13].show(self.config.animationSpeed, {force: self.config.allowForce});
									},500);
							}
							else if (modules[i].name == 'MMM-iFrame14') {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
									console.log("Showing "+modules[14].name+" ID: "+idnr[1]);	
									setTimeout(function(){
										modules[14].show(self.config.animationSpeed, {force: self.config.allowForce});
									},500);
							}
							else if (modules[i].name == 'MMM-iFrame15') {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
									console.log("Showing "+modules[15].name+" ID: "+idnr[1]);	
									setTimeout(function(){
										modules[15].show(self.config.animationSpeed, {force: self.config.allowForce});
									},500);
							}
							else {
								for(var num=0; num<17; num++ ){
									console.log("Hiding opend "+ modules[num].name+" ID: "+idnr[1]);
									modules[num].hide(self.config.animationSpeed, {force: self.config.allowForce});	
									}
								console.log("Showing "+modules[16].name+" ID: "+idnr[1]);	
								setTimeout(function(){
									modules[16].show(self.config.animationSpeed, {force: self.config.allowForce});
								},500);
							}
							modulebar2.sendNotification("Modulebar2 is Clicked");
						}
					}
				}
			}
		});
		// Fixes the aligning.
        item.style.flexDirection = {
            "right"  : "row-reverse",
            "left"   : "row",
            "top"    : "column",
            "bottom" : "column-reverse"
        }[placement];
		// Sets the border around the symbol/picture/text to black.
        if (!self.config.showBorder) {
            item.style.borderColor = "black";
        }
		// Adds the Font-Awesome symbol if specified.
        if (data.symbol) {
            var symbol = document.createElement("span");
            symbol.className = "modulebar-picture fa fa-" + data.symbol;
			// Sets the size on the symbol if specified.
            if (data.size) {
                symbol.className += " fa-" + data.size;
                symbol.className += data.size == 1 ? "g" : "x";
            }
			// Align the symbol with a margin.
            if (data.text && placement === "left") {
                symbol.style.marginRight = "4px";
            }
			// Adds the symbol to the item.
            item.appendChild(symbol);

		// Adds a picture if specified.
		} else if (data.img) {
            var image = document.createElement("img");
            image.className = "modulebar-picture";
            image.src = data.img;
			// Sets the size of the picture if specified.
            if (data.width)  image.width  = data.width;
            if (data.height) image.height = data.height;
			// Align the picture with a margin.
            if (data.text && placement === "left") {
                image.style.marginRight = "4px";
            }
			// Adds the picture to the item.
            item.appendChild(image);
        }
		// Adds the text if specified.
        if (data.text) {
            var text = document.createElement("span");
            text.className = "modulebar-text";
            text.innerHTML = data.text;
			// Align the text with a margin.
            if ((data.symbol || data.img) && placement === "right") {
                text.style.marginRight = "4px";
            }
			// Adds the text to the item.
            item.appendChild(text);
        }
		// All done. :)
        return item;
	},
	
	notificationReceived: function(notification, payload){
		Log.info(this.name + " - received norification : " + notification);

		if(notification === 'Modules All Change'){
			this.hide();
		}
	}
});	


