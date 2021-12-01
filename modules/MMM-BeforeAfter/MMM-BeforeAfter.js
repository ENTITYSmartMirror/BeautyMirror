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
      // BeforeImage모듈로부터 BEFOREIMAGECLICK 신호를 받았을때
      case "BEFOREIMAGECLICK" :
        var baelem = document.getElementById("BeforeAfterClickid")     
          // 사진찍기 python shell 작동시작
          BeforeAfterMoudule.sendSocketNotification("BEFORECAPTURE")
          //baelem.innerHTML = "카메라 로딩 중"       
        break;
      // BeforeImage모듈로부터 BEFOREIMAGECLICK 신호를 받았을때
      case "AFTERIMAGECLICK" :
      var baelem2 = document.getElementById("BeforeAfterClickid2")
        // 사진찍기 python shell 작동시작
        BeforeAfterMoudule.sendSocketNotification("AFTERCAPTURE")
        //baelem2.innerHTML = "카메라 로딩 중"       
        break;
    }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      // BeforeImage사진찍기 성공
      case "BEFORECAPTURESUCCESS":
        console.log("Socket recevied payload1: "+payload)
        var baelem = document.getElementById("BeforeAfterClickid")
        //BeforeImage 모듈에게 사진이 찍혔다고 신호전달
        BeforeAfterMoudule.sendNotification("BEFOREIMAGE")
        //baelem.innerHTML = "자르기 전 사진찍기 완료!"
        break
      // AfterImage사진찍기 성공
      case "AFTERCAPTURESUCCESS":
        console.log("Socket recevied payload1: "+payload)
        var baelem2 = document.getElementById("BeforeAfterClickid2")
        // //AfterImage 모듈에게 사진이 찍혔다고 신호전달
        BeforeAfterMoudule.sendNotification("AFTERIMAGE")
        BeforeAfterMoudule.sendNotification("CUTDAY",payload)
        //baelem2.innerHTML = "자르기 후 사진찍기 완료!"
      break
    }
  }

})

