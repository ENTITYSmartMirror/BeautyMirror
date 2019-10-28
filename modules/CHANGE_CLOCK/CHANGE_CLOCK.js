Module.register("CHANGE_CLOCK",{
    
    notificationReceived: function(notification, payload){

        if(notification === 'HIDE_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    visible: 'false'
                }
            });
        }
        if(notification === 'SHOW_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    visible: 'true'
                }
            });
        }
        if(notification === 'TOP_RIGHT_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'top_right',
                }
            });
        }

        if(notification === 'TOP_LEFT_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'top_left',
                }
            });
        }

        if(notification === 'BOTTOM_RIGHT_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'bottom_right',
                }
            });
        }

        if(notification === 'BOTTOM_LEFT_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'bottom_left',
                }
            });
        }

        if(notification === 'TOP_CENTER_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'top_center',
                }
            });
        }

        if(notification === 'TOP_BAR_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'top_bar',
                }
            });
        }

        if(notification === 'UPPER_THIRD_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'upper_third',
                }
            });
        }

        if(notification === 'LOWER_THIRD_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'lower_third',
                }
            });
        }
        if(notification === 'FULLSCREEN_ABOVE_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'fullscreen_above',
                }
            });
        }
        if(notification === 'FULLSCREEN_BELOW_CLOCK'){
            this.setPositions(modules = {
                'clock':{
                    position: 'fullscreen_below',
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