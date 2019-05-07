var Testpythons;
Module.register("MMM-Testpython", {

    defaults: {},
    start: function (){
        Testpythons = this;
    },

  getDom: function() {
    var element = document.createElement("div")
    element.className = "myContent"
    element.id="divid1"
    var subElement = document.createElement("p")
    subElement.innerHTML = "여기를 클릭하세요."
    subElement.id = "clickid1"
    element.appendChild(subElement)
    var subelement2 = document.createElement("p")
    subelement2.innerHTML = "이 곳에 당신의 예상 나이가 표시됩니다."
    subelement2.id = "showage"
    element.appendChild(subelement2)
    return element
  },
  

  notificationReceived: function(notification, payload, sender) {
    switch(notification) {
      case "DOM_OBJECTS_CREATED":
      var elem = document.getElementById("clickid1")
      elem.addEventListener("click", () => {
        Testpythons.sendSocketNotification("TEST")
        var showage2 = document.getElementById("showage")
        showage2.innerHTML = "당신의 나이를 분석중입니다."
        Testpythons.sendNotification('CHANGE_POSITIONS', 
        modules = {
              'MMM-iFrame17':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame18':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame19':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame20':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame21':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame22':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame23':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame24':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame25':{
                visible: 'false',
                position: 'bottom_left',
              },
              'MMM-iFrame26':{
                visible: 'false',
                position: 'bottom_left',
              },
            });
        console.log("hello~hello~hello~hello~hello~hello~hello~hello~hello~hello~")
      }) 
      break;
      case "Modules All Change" :
      var ele2 = document.getElementById("showage")
      ele2.innerHTML =  "이 곳에 당신의 예상 나이가 표시됩니다."
      }
  },
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "I_DID":
        console.log("Socket recevied 1: " + payload);
        var payload3;
        payload3=payload.toString().split(",");
        console.log("Socket recevied 1: " + payload3);
        var elemk = document.getElementById("showage");
        var sex = payload3[0];
        console.log("Socket recevied 1: " + sex);
        var age = payload3[1];
        console.log("Socket recevied 1: " + age);
        var change;
        if (sex == "male"){
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
        else if (sex == "female"){
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
                'MMM-iFrame17':{
                  visible: 'true',
                  position: 'bottom_left',
                }
              })
              break
            case 2 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame18':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 3 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame19':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 4 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame20':{
                  visible: 'true',
                  position: 'top_right',
              }
            })
            break
            case 5 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame21':{
                  visible: 'true',
                  position: 'bottom_left',
              }
            })
            break
            case 6 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame22':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 7 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame23':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 8 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame24':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 9 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame25':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
            case 10 : 
              this.sendNotification('CHANGE_POSITIONS', 
              modules = {
                'MMM-iFrame26':{
                  visible: 'true',
                  position: 'bottom_left',
              } 
            })
            break
          } 
        elemk.innerHTML = "당신의 예상 나이는 " + age + "세 입니다.";   
      break
    }
  }
})

