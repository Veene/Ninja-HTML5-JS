var canvas;
var canvasContext;
var ninjaX = 20;
var ninjaY = 640-75;
var ninjaXSpeed = 7;
var ninjaYSpeed = 5;
var ninjaSizeX = 40;
var ninjaSizeY = 75;
var tileWidth = 75;
var tileHeight = 80;
var angle = 0;
var Ninja_idleLoaded = false;

const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

let RUNNING_RIGHT = false;
let RUNNING_LEFT = false;
let RUNNING_UP = false;
let RUNNING_DOWN = false;

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


var Ninja_idle = document.createElement("img"); //need this for image files
var tile1 = document.createElement("img");
var tile2 = document.createElement("img");
var tileSkyLeft = document.createElement("img");
var tileSkyRight = document.createElement("img");



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
	if(evt.keyCode == KEY_DOWN_ARROW){
		RUNNING_DOWN = true;
	}
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
	if(evt.keyCode == KEY_DOWN_ARROW){
		RUNNING_DOWN = false;
	}
}

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
	
	drawTiles();
	drawImageSprite(Ninja_idle, ninjaX, ninjaY, ninjaSizeX, ninjaSizeY)
	ninjaMove();
}

function startGame(){
    var framesPerSecond = 30;
    setInterval(update,1000/framesPerSecond)
}

function ninjaMove() {
	if(RUNNING_LEFT){
		ninjaX -= ninjaXSpeed;
	}
	if(RUNNING_RIGHT){
		ninjaX += ninjaXSpeed;
	}
	if(RUNNING_UP){
		ninjaY -= ninjaYSpeed;
	}
	if(RUNNING_DOWN){
		ninjaY += ninjaYSpeed;
	}
}
//TILE DRAWING AND CALCULATION
// j + i * 8 to calculate which grid were talking about
function drawTiles() {
	for(i=0; i<mapGrid.length; i++){
		for(j=0; j<8; j++){
			if(mapGrid[j + i * 8] == 1){
				drawImageSprite(tile1, 75*j, 80*i, tileWidth, tileHeight)
			}
			if(mapGrid[j + i * 8] == 2){
				drawImageSprite(tile2, 75*j, 80*i, tileWidth, tileHeight)
			}
			if(mapGrid[j + i * 8] == 3){
				drawImageSprite(tileSkyLeft, 75*j, 80*i, tileWidth, tileHeight)
			}
			if(mapGrid[j + i * 8] == 4){
				drawImageSprite(tileSkyRight, 75*j, 80*i, tileWidth, tileHeight)
			}
		}
	}
}

function loadImages() {
	Ninja_idle.src = "images/Ninja/Idle__000.png";
	tile1.src = "images/Tiles/2.png";
	tile2.src = "images/Tiles/5.png";
	tileSkyLeft.src = "images/Tiles/13.png";
	tileSkyRight.src = "images/Tiles/15.png";
}

//WE ARE FUNCTIONS TO DRAW IMAGES BELOW
function drawImageSprite(useImage, atX,atY, scaleX, scaleY) {
	canvasContext.save();
	canvasContext.drawImage(useImage, atX, atY, scaleX, scaleY);
	canvasContext.restore();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight);
}

function colorCircle(centerX,centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
	canvasContext.fill();
}

function colorText(showWords, textX,textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX, textY);
}