function GetKeyPressed() {
	if (keysDown[upKey]) {
		return 1;
	}
	if (keysDown[downKey]) {
		return 2;
	}
	if (keysDown[leftKey]) {
		return 3;
	}
	if (keysDown[rightKey]) {
		return 4;
	}
}

function updateKey(event, key) {
    switch (key) {
        case "up":
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                upKey = event.keyCode;
                $("#upB").text(event.key);
                $("#upButton").text(event);
                $("#upButton").val(event.value);
            }
            else {
                window.alert("Please Choose Other Key!");
                $("#upButton").text("");
            }
            break;
        case "down": 
            if(!(event.keyCode===upKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                downKey = event.keyCode;
                $("#downB").text(event.key);
                $("#downButton").text(event);
                $("#downButton").val(event.value);
            }
            else {
                window.alert("Please Choose Other Key!");
                $("#downButton").text("");
            }
            break;
        case "left": 
            if(!(event.keyCode===downKey ||event.keyCode===upKey||event.keyCode===rightKey)) {
                leftKey = event.keyCode;
                $("#leftB").text(event.key);
                $("#leftButton").text(event);
                $("#leftButton").val(event.value);

            }
            else {
                window.alert("Please Choose Other Key!");
                $("#leftButton").text("");
            }
            break;
        case "right": 
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===upKey)) {
                rightKey =event.keyCode;
                $("#rightB").text(event.key);
                $("#rightButton").text(event);
                $("#rightButton").val(event.value);
            }
            else {
                window.alert("Please Choose Other Key!");
                $("#rightButton").text("");
            }
            break;
    }
}
