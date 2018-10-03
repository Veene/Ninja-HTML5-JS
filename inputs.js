const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

let RUNNING_RIGHT = false;
let RUNNING_LEFT = false;
let RUNNING_UP = false;
let RUNNING_DOWN = false;
let ninjaPermissionToMove = true;

//KEYPRESSES
function keyPressed(evt){
	if(evt.keyCode == KEY_LEFT_ARROW){
		RUNNING_LEFT = true;
	}
	if(evt.keyCode == KEY_UP_ARROW){
		RUNNING_UP = true;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW){
		RUNNING_RIGHT = true;
	}
	// if(evt.keyCode == KEY_DOWN_ARROW){
	// 	RUNNING_DOWN = true;
	// }
	evt.preventDefault();
}

function keyReleased(evt) {
	if(evt.keyCode == KEY_LEFT_ARROW){
		RUNNING_LEFT = false;
	}
	if(evt.keyCode == KEY_UP_ARROW){
		RUNNING_UP = false;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW){
		RUNNING_RIGHT = false;
	}
	// if(evt.keyCode == KEY_DOWN_ARROW){
	// 	RUNNING_DOWN = false;
	// }
}