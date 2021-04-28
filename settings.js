var upKey=38;
var downKey=40;
var leftKey=37;
var rightKey=39;

function checkSetting(){ 
    $("#settings").validate({
        submitHandler: function(form){
            game(upKey, downKey, rightKey, leftKey);
        }
    }); 
}

function changeTime(val) {
    //document.getElementById('timeInput').value=val;
    //document.getElementById('inGameTimeInput').value=val;
    document.getElementById('rangeValue1').innerHTML=val;
    var slider = document.getElementById("timeRange").value;
    var timeVal = document.getElementById("rangeValue1").value;
    timeVal.innerHTML=val;
    slider.oninput=function () {
        timeVal.innerHTML=this.value;
    }
}

function randomSettings(){
    /////default keys
    $("#leftButton").val("");
    $("#leftButton").text("");
    $("#leftB").val("Arrow left");

    $("#upButton").val("");
    $("#upButton").text("");
    $("#upB").val("Arrow up");

    $("#rightButton").val("");
    $("#rightButton").text("");
    $("#rightB").val("Arrow right");

    $("#downButton").val("");
    $("#downButton").text("");
    $("#downB").val("Arrow down");


    ////random monsters, time and balls
    var seconds=getRandomInt(60,1000);
    $('#rangeValue1').text(seconds);
    $("#rangeValue1").val(seconds);
    document.getElementById("rangeValue1").value = "1000";

    //changeTime(seconds);
    var monsters=getRandomInt(1,4);
    $("#rangeValue2").val(monsters);
    $('#rangeValue2').text(monsters);


    var balls=getRandomInt(50,90);
    $("#rangeValue3").val(balls);
    $('#rangeValue3').text(balls);


    ///random colors for each ball
    var color1=getRandomColor();
    var color2=getRandomColor();
    var color3=getRandomColor();

    $("#5color").css("background-color", color1);
    $("#5color").val(color1);

    $("#15color").css("background-color", color2);
    $("#15color").val(color2);

    $("#25color").css("background-color", color3);
    $("#25color").val(color3);

    game(upKey, downKey, rightKey, leftKey);
}

function getRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  