var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
    },
    getStyles: function(){
      return ["Testpython.css"];
    },

  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid1"
    element.font = 4
    var subElement = document.createElement("p")
    subElement.innerHTML = "여기를 클릭하세요."
    subElement.id = "clickid1"
    subElement.className = "click"
    subElement.style.fontSize = "2em"
    element.appendChild(subElement)
    var subelement2 = document.createElement("p")
    subelement2.innerHTML = "이 곳에 예상 나이가 표시됩니다."
    subelement2.id = "showage"
    subelement2.className = "showage"
    subelement2.style.fontSize = "2em"
    element.appendChild(subelement2)
    return element
  },
  

  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      var elem = document.getElementById("clickid1")
      elem.innerHTML = "여기를 클릭하세요."
      elem.addEventListener("click", () => {
        var audioFile = new Audio('modules/MMM-TestPython/sound.m4a');
        audioFile.play();
        audioFile.currentTime = 0;


        Testpythons.sendNotification("camera_stop")
        Testpythons.sendSocketNotification("TEST")
        elem.innerHTML = "분석중....."
        var showage2 = document.getElementById("showage")
        showage2.innerHTML = "당신의 나이를 분석중입니다."
        Testpythons.sendNotification('CHANGE_POSITIONS', 
        modules = {
              'Man10s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Man20s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Man30s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Man40s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Man50s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Woman10s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Woman20s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Woman30s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Woman40s':{
                visible: 'false',
                position: 'bottom_left',
              },
              'Woman50s':{
                visible: 'false',
                position: 'bottom_left',
              },
            });
        console.log("hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~")
      }) 
      break;
      case "Modules All Change" :
          var elem = document.getElementById("clickid1")
          elem.innerHTML = "여기를 클릭하세요."
          var ele2 = document.getElementById("showage")
          ele2.innerHTML =  "이 곳에 예상 나이가 표시됩니다."
      break;
      }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_DID":
        console.log("notnotnotnot :  " + payload);   
        this.sendNotification("ageresult_success");
        if(payload=="notFind"){
            console.log("notFind");
        }    
        var payload3;
        payload3=payload.toString().split(",");
        console.log("Socket recevied 1: " + payload3);
        var elemk = document.getElementById("clickid1")
        var elemk2 = document.getElementById("showage");
        var gender = payload3[0];
        console.log("Socket recevied 1: " + gender);
        var age = payload3[1];
        console.log("Socket recevied 1: " + age);
        var change;
        if (gender == "male"){
          if(age <= 19){
            change = 1;
            console.log(age);
            console.log(change);
          }
          else if(19 < age && age < 30){
            change = 2;
            console.log(age);
            console.log(change);
          }
          else if(29 < age && age < 40){
            change = 3; 
            console.log(age);
            console.log(change);
          }
          else if(39 < age && age < 50){
            change = 4;  
            console.log(age);
            console.log(change);
          }
          else if(49 < age){
            change = 5;
            console.log(age);
            console.log(change);
          }
        }
        else if (gender == "female"){
          if(age <= 19){
            change = 6;
            console.log(age);
            console.log(change);
          }
          else if(19 < age && age < 30){
            change = 7;
            console.log(age);
            console.log(change);
          }
          else if(29 < age && age < 40){
            change = 8; 
            console.log(age);
            console.log(change);
          }
          else if(39 < age && age < 50){
            change = 9;  
            console.log(age);
            console.log(change);
          }
          else if(49 < age){
            change = 10;
            console.log(age);
            console.log(change);
          }
        }
          switch(change){
            case 1 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Man10s':{
                  visible: 'true',
                  position: 'bottom_left',
                }
              })
              break
            case 2 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Man20s':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 3 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Man30s':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 4 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Man40s':{
                  visible: 'true',
                  position: 'top_right',
              }
            })
            break
            case 5 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Man50s':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 6 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Woman10s':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 7 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Woman20s':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 8 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Woman30s':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 9 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Woman40s':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 10 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'Woman50s':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
          } 
          if(payload=="notFind"){
            console.log("fuckyou notFind")
            elemk.innerHTML = "다시 눌러주세요!";
            elemk2.innerHTML = "얼굴인식실패!"; 
          }
          else if(payload!="notFind"){
            elemk.innerHTML = "";
            elemk2.innerHTML = "고객님의 예상나이" + age + "세의 추천헤어입니다."; 
          }  
        
          
      break
    }
  }
})

