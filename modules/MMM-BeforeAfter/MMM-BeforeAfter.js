var BeforeAfterMoudule;
Module.register("MMM-BeforeAfter", {

    defaults: {},
    start: function (){
        BeforeAfterMoudule = this;
    },
  
  getDom: function() {
    var BAelement = document.createElement("div")
    BAelement.className = "BeforeAftercontent"
    BAelement.id="BeforeAfterdiv"
    BAelement.innerHTML = "Hello, World!!! " + this.config.foo
    var BAsubElement = document.createElement("p")
    BAsubElement.innerHTML = "Click test" 
    BAsubElement.id = "BeforeAfterClickid"
    BAelement.appendChild(BAsubElement)
    var BAsubElement2 = document.createElement("p")
    BAsubElement2.innerHTML = "Click2" 
    BAsubElement2.id = "BeforeAfterClickid2"
    BAelement.appendChild(BAsubElement2)

    return BAelement
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "Modules All Change" :
        console.log(" click successex !")
        var baelem = document.getElementById("BeforeAfterClickid")
        console.log("ssexx"+baelem)
        baelem.addEventListener("click", () => {
          console.log(" click successexx !")
          
          BeforeAfterMoudule.sendSocketNotification("BEFORECAPTURE")
          BeforeAfterMoudule.sendNotification("LOADINGBEFORE")
          
          
          baelem.innerHTML = "click success"       
        });
      
      var baelem2 = document.getElementById("BeforeAfterClickid2")
      baelem2.addEventListener("click", () => {
        //
        BeforeAfterMoudule.sendSocketNotification("AFTERCAPTURE")
        BeforeAfterMoudule.sendNotification("LOADINGAFTER")
        //
        console.log(" click2 successex !")
        baelem2.innerHTML = "click2 success"       
      });
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "BEFORECAPTURESUCCESS":
        console.log("Socket recevied payload : "+payload)
        var baelem2 = document.getElementById("BeforeAfterClickid")
        BeforeAfterMoudule.sendNotification("BEFOREIMAGE")
        //
        BeforeAfterMoudule.sendNotification('SHOWCHANGEDIMAGE');
        //
        baelem2.innerHTML = payload
        break
      case "AFTERCAPTURESUCCESS":
        console.log("Socket recevied payload : "+payload)
        var baelem2 = document.getElementById("BeforeAfterClickid")
        BeforeAfterMoudule.sendNotification("AFTERIMAGE")
        //
        BeforeAfterMoudule.sendNotification('SHOWCHANGEDIMAGE');
        //
        baelem2.innerHTML = payload
      break
    }
  }

})

