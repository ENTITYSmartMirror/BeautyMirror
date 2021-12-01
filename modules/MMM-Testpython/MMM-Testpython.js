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
      // 클릭시
      elem.addEventListener("click", () => {
        // 클릭 사운드
        var audioFile = new Audio('modules/MMM-TestPython/sound.m4a');
        audioFile.play();
        audioFile.currentTime = 0;
        // 카메라 꺼짐
        Testpythons.sendNotification("camera_stop")
        // 사진 분석 소켓을 node_helper에게 전달
        Testpythons.sendSocketNotification("TEST")
        elem.innerHTML = "분석중....."
        var showage2 = document.getElementById("showage")
        showage2.innerHTML = "당신의 나이를 분석중입니다."
        // 사진 모듈의 포지션이 겹처서 overlapping 되는 것을 방지하기 위해 포지션 이동
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
        console.log("All hair picture module -> hide")
      }) 
      break;
      // REFLESH / 끝내기 버튼을 눌렀을시 초기화된다.
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
      // 카메라 얼굴인식이 정상적으로 완료될 경우
      case "I_DID":
        console.log("payload in Testpython when successful Azure API" + payload);   
        this.sendNotification("ageresult_success");
        // 얼굴 인식 실패
        if(payload=="notFind"){
            console.log("notFind");
        }    
        // 결과값 데이터 slice
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
        // 남자일시
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
        // 여자일시
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
          // 얼굴 인식 실패
          if(payload=="notFind"){
            console.log("fuckyou notFind")
            elemk.innerHTML = "다시 눌러주세요!";
            elemk2.innerHTML = "얼굴인식실패!"; 
          }
          // 얼굴 인식 성공 후 결과 값 출력
          else if(payload!="notFind"){
            elemk.innerHTML = "";
            elemk2.innerHTML = "고객님의 예상나이" + age + "세의 추천헤어입니다."; 
          }  
        
          
      break
    }
  }
})

