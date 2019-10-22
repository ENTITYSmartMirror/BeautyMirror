Module.register("CHANGE_WEATHER",{
    
    notificationReceived: function(notification, payload){

        if(notification === 'HIDE_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    visible: 'false'
                },
                'weatherforecast':{
                    visible: 'false'
                }
            });
        }
        if(notification === 'SHOW_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    visible: 'true'
                },
                'weatherforecast':{
                    visible: 'true'
                }
            });
        }
        if(notification === 'TOP_RIGHT_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'top_right'
                },
                'weatherforecast':{
                    position: 'top_right'
                }
            });
        }

        if(notification === 'TOP_LEFT_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'top_left'
                },
                'weatherforecast':{
                    position: 'top_left'
                }
            });
        }

        if(notification === 'BOTTOM_RIGHT_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'bottom_right'
                },
                'weatherforecast':{
                    position: 'bottom_right'
                }
            });
        }

        if(notification === 'BOTTOM_LEFT_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'bottom_left'
                },
                'weatherforecast':{
                    position: 'bottom_left'
                }
            });
        }

        if(notification === 'TOP_CENTER_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'top_center'
                },
                'weatherforecast':{
                    position: 'top_center'
                }
            });
        }

        if(notification === 'TOP_BAR_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'top_bar'
                },
                'weatherforecast':{
                    position: 'top_bar'
                }
            });
        }

        if(notification === 'UPPER_THIRD_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'upper_third'
                },
                'weatherforecast':{
                    position: 'upper_third'
                }
            });
        }

        if(notification === 'LOWER_THIRD_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'lower_third'
                },
                'weatherforecast':{
                    position: 'lower_third'
                }
            });
        }
        if(notification === 'FULLSCREEN_ABOVE_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'fullscreen_above'
                },
                'weatherforecast':{
                    position: 'fullscreen_above'
                }
            });
        }
        if(notification === 'FULLSCREEN_BELOW_WEATHER'){
            this.setPositions(modules = {
                'currentweather':{
                    position: 'fullscreen_below'
                },
                'weatherforecast':{
                    position: 'fullscreen_below'
                }
            });
        }



    },
    
    getid: function(mname) {
        var id;
        MM.getModules().enumerate(function(module) {
            if (mname == module.name){
                id = module.identifier;
            }
        });
        return id;
    },

    setPositions: function(object) {
        //get data with:
        var modulenames = Object.keys(object);
        var values = Object.values(object);

        for (var i = 0; i < modulenames.length; i++) {
            var id = this.getid(modulenames[i]);
            MM.getModules().withClass(modulenames[i]).enumerate(function(module) {
                if (values[i].position) {
                    var split_position = values[i].position.split("_");
                    var selected_module = document.getElementById(id);
                    var region = document.querySelector('div.region.' + split_position[0] + '.' + split_position[1] + ' div.container');

                    // Make sure the region is visible
                    if (region.style.display === 'none') {
                        region.style.display = 'block';
                    }

                    // Move module
                    region.appendChild(selected_module);

                }

                // Set the module visible after moving to trigger css opacity transition animation
                if (values[i].visible == 'true') {
                    module.show(1000, function() {});
                }else if(values[i].visible == 'false'){
                    module.hide(1000, function() {});
                }
            });
        }
    },

    setDefaults: function() {
        MM.getModules().enumerate(function(module) {
            if (module.data.position) {
                var split_position = module.data.position.split("_");
                var selected_module = document.getElementById(module.identifier);
                var region = document.querySelector('div.region.' + split_position[0] + '.' + split_position[1] + ' div.container');

                // Make sure the region is visible
                if (region.style.display === 'none') {
                    region.style.display = 'block';
                }
                
                // Move module to its original position
                region.appendChild(selected_module);
                
                // Show module
                module.show(1000, function() {});
            }
        });
        
    },

});