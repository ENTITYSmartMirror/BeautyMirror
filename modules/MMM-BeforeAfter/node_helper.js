var NodeHelper = require("node_helper");
var {PythonShell} = require('python-shell');
var socketTestpython;
module.exports = NodeHelper.create({
  start: function() {
    socketTestpython=this;
    console.log(this.name+"node_helper started")
  },
  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      // BeforeImage 사진 촬영 시잦ㄱ
      case "BEFORECAPTURE":
        console.log("notification : " + notification)
	      PythonShell.run('./modules/MMM-BeforeAfter/before.py', null, function (err, result) {
            if (err) throw err;
            console.log(result);          
            socketTestpython.sendSocketNotification("BEFORECAPTURESUCCESS",result);
          });
        break
      // AfterImage 사진 촬영 시잦ㄱ
      case "AFTERCAPTURE":
        console.log("notification : " + notification)
        PythonShell.run('./modules/MMM-BeforeAfter/before2.py', null, function (err, result) {
          if (err) throw err;
          console.log(result);          
          socketTestpython.sendSocketNotification("AFTERCAPTURESUCCESS",result);
        });
        
      break
    }
  }
}) 
