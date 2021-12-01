var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketDeleteImage;
module.exports = NodeHelper.create({
  start: function() {
    socketDeleteImage=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "DELETE":
        console.log("notification : " + notification)
        PythonShell.run('./modules/MMM-DeleteImage/Delete.py', null, function (err, result) {
          if (err) throw err;
          console.log("Delete Success" + result);          
          socketDeleteImage.sendSocketNotification("DELETEgood",result);
        });
        break
      // 모든 사진 사제
      case "DELETEall":
          console.log("notification : " + notification)
          PythonShell.run('./modules/MMM-DeleteImage/Deleteall.py', null, function (err, result) {
            if (err) throw err;
            console.log("Delete Success" + result);          
            socketDeleteImage.sendSocketNotification("DELETEgood",result);
          });
          break
    }
  }
}) 
