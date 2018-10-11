var canvas;
var canvasContext;
var ninjaX = 20;
var ninjaY = 640-80;
var ninjaXSpeed = 7;
var ninjaYSpeed = 14;
var ninjaSizeX = 40;
var ninjaSizeY = 75;
var tileWidth = 75;
var tileHeight = 80;
var angle = 0;
var Ninja_idleLoaded = false;
let ninjaInAir = false;
let ninjaJump = 0;
let ninjaRunning = false;
let ninjaRunningTime = 0;

var mushroomSizeX = 40;
var mushroomSizeY = 40;
var mushroomList = [];
var mushroomTimer = 0;
var mushroomObject = {
	width: 40,
	height: 40,
	speed: 4,
}

mapGrid = [0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		0, 3, 4, 0, 0, 3, 4, 0,
		0, 0, 0, 0, 0, 0, 0, 0,
		1, 1, 1, 1, 1, 1, 1, 1,
		2, 2, 2, 2, 2, 2, 2, 2,]

window.onload = function(){
    canvas = document.getElementById("gameCanvas")
	canvasContext = canvas.getContext('2d');
	
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	colorRect(0, 0, canvas.width, canvas.height, 'black')
	loadImages();
	
	startGame();
}

function update(){
	colorRect(0, 0, canvas.width, canvas.height, 'black')
	
	drawAll();
	ninjaCollision();
	mushroomCollision();
	ninjaMove();
	jump();
}

function startGame(){
    var framesPerSecond = 30;
    setInterval(update,1000/framesPerSecond)
}

function ninjaMove() {
	if(RUNNING_LEFT && ninjaPermissionToMove){
		ninjaX -= ninjaXSpeed;
	}
	if(RUNNING_RIGHT && ninjaPermissionToMove){
		ninjaX += ninjaXSpeed;
	}
	if(RUNNING_UP && ninjaPermissionToMove && !ninjaInAir){ //Add ninja has to be on ground to jump
		ninjaInAir = true;
		ninjaJump = 150;
	}
	if(ninjaRunning && !ninjaInAir){
		ninjaRunningTime = (ninjaRunningTime + 1) % 10
	}
	
	
	// if(RUNNING_DOWN && ninjaPermissionToMove){
	// 	ninjaY += ninjaYSpeed;
	// }
}

function jump() {
	if(ninjaInAir && ninjaJump > 0){
		ninjaY -= ninjaYSpeed;
		ninjaJump -= ninjaYSpeed;
	}
	if(ninjaInAir && ninjaJump <= 0 && ninjaJump > -150){
		ninjaY += ninjaYSpeed;
		ninjaJump -= ninjaYSpeed
	}
	if(ninjaInAir && ninjaJump <= -150){
		ninjaInAir = false;
	}
}
//COLLISION
function ninjaCollision() {
	var ninjaInColumn = Math.floor(ninjaX/tileWidth); // this will always be 0-7 (8 will be outofbounds)
	var ninjaInRow = Math.floor((ninjaY+ninjaSizeY)/tileHeight); //this will always be 0-9 (10 will be outofbounds)
	var tileThatNinjaIsOn = ninjaInColumn + ninjaInRow * 8; //8 comes from 75 pixels 8 times in X col

	var tileIndexNinjaStandingOn = mapGrid[tileThatNinjaIsOn]
	if(tileIndexNinjaStandingOn == 1){
			ninjaY = 640-75;
	}
	if(ninjaX < 10){
		ninjaX = 10;
	}
	if(ninjaX > canvas.width - ninjaSizeX){
		ninjaX = canvas.width - ninjaSizeX;
	}
}
function mushroomCollision() {
	//collision with a platform
	for(i=0; i<mushroomList.length;i++){
		var shroomInColumn = Math.floor((mushroomList[i].x)/tileWidth) //finding the tile x wise its in
		var shroomInRow = Math.floor((mushroomList[i].y+40)/tileHeight);
		var shroomInColumn2 = Math.floor((mushroomList[i].x+40)/tileWidth); //finding the tile x wise its in
		var shroomInRow2 = Math.floor((mushroomList[i].y+40)/tileHeight);
		var tileThatShroomXYisOn = shroomInColumn + shroomInRow * 8;
		var tileThatShroomXYisOn2 = shroomInColumn2 + shroomInRow2 * 8;
		if(mapGrid[tileThatShroomXYisOn] != 0 || mapGrid[tileThatShroomXYisOn2] != 0) {
			mapGrid[tileThatShroomXYisOn] = 0;
			mapGrid[tileThatShroomXYisOn2] = 0;
		}
		
	}
	//collision with ninja
	for(i=0; i<mushroomList.length; i++){
		if(ninjaX < (mushroomList[i].x+40) && mushroomList[i].x < ninjaX+40
		&& ninjaY < mushroomList[i].y+40 && mushroomList[i].y < ninjaY+80) {
			mushroomList.splice(i,1)
		}
	}
} 