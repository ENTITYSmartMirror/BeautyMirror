var BeforeAfterMoudule;
Module.register("MMM-BeforeAfter", {

    defaults: {},
    start: function (){
        BeforeAfterMoudule = this;
    },
    getStyles: function(){
      return ["BeforeAfter.css"];
    },
  getDom: function() {
    var BAelement = document.createElement("div")
    BAelement.className = "BeforeAftercontent"
    BAelement.id="BeforeAfterdiv"
    //BAelement.innerHTML = "전 후 사진 비교입니다 !"
    var BAsubElement = document.createElement("p")
    //BAsubElement.innerHTML = "전 사진 찍기" 
    BAsubElement.id = "BeforeAfterClickid"
    BAelement.appendChild(BAsubElement)
    var BAsubElement2 = document.createElement("p")
    //BAsubElement2.innerHTML = "후 사진 찍기" 
    BAsubElement2.id = "BeforeAfterClickid2"
    BAelement.appendChild(BAsubElement2)

    return BAelement
  },
  
  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "BEFOREIMAGECLICK" :
        var baelem = document.getElementById("BeforeAfterClickid")     
          BeforeAfterMoudule.sendSocketNotification("BEFORECAPTURE")
          //baelem.innerHTML = "카메라 로딩 중"       
        break;
      case "AFTERIMAGECLICK" :
      var baelem2 = document.getElementById("BeforeAfterClickid2")
        BeforeAfterMoudule.sendSocketNotification("AFTERCAPTURE")
        //BeforeAfterMoudule.sendNotification("LOADINGAFTER")
        //baelem2.innerHTML = "카메라 로딩 중"       
        break;
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "BEFORECAPTURESUCCESS":
        console.log("Socket recevied payload1: "+payload)
        var baelem = document.getElementById("BeforeAfterClickid")
        BeforeAfterMoudule.sendNotification("BEFOREIMAGE")
        //
        BeforeAfterMoudule.sendNotification('SHOWCHANGEDIMAGE');
        //
        //baelem.innerHTML = "자르기 전 사진찍기 완료!"
        break
      case "AFTERCAPTURESUCCESS":
        console.log("Socket recevied payload1: "+payload)
        var baelem2 = document.getElementById("BeforeAfterClickid2")
        BeforeAfterMoudule.sendNotification("AFTERIMAGE")
        //
        BeforeAfterMoudule.sendNotification('SHOWCHANGEDIMAGE');
        //
        BeforeAfterMoudule.sendNotification("CUTDAY",payload)

        //baelem2.innerHTML = "자르기 후 사진찍기 완료!"
      break
    }
  }

})

