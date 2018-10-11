//INSTANTIATING IMAGES
var Ninja_idle = document.createElement("img"); //need this for image files
var Ninja_jump0 = document.createElement("img");
var Ninja_jump1 = document.createElement("img");
var Ninja_jump2 = document.createElement("img");
var Ninja_jump3 = document.createElement("img");
var Ninja_jump4 = document.createElement("img");
var Ninja_jump5 = document.createElement("img");
var Ninja_jump6 = document.createElement("img");
var Ninja_jump7 = document.createElement("img");
var Ninja_jump8 = document.createElement("img");
var Ninja_jump9 = document.createElement("img");
var Ninja_run0 = document.createElement("img");
var Ninja_run1 = document.createElement("img");
var Ninja_run2 = document.createElement("img");
var Ninja_run3 = document.createElement("img");
var Ninja_run4 = document.createElement("img");
var Ninja_run5 = document.createElement("img");
var Ninja_run6 = document.createElement("img");
var Ninja_run7 = document.createElement("img");
var Ninja_run8 = document.createElement("img");
var Ninja_run9 = document.createElement("img");
var tile1 = document.createElement("img");
var tile2 = document.createElement("img");
var tileSkyLeft = document.createElement("img");
var tileSkyRight = document.createElement("img");
var mushroom1 = document.createElement("img");



//WE ARE LOADING IMAGES
function loadImages() {
	Ninja_idle.src = "images/Ninja/Idle__000.png";
	Ninja_jump0.src = "images/Ninja/Jump__000.png";
	Ninja_jump1.src = "images/Ninja/Jump__001.png";
	Ninja_jump2.src = "images/Ninja/Jump__002.png";
	Ninja_jump3.src = "images/Ninja/Jump__003.png";
	Ninja_jump4.src = "images/Ninja/Jump__004.png";
	Ninja_jump5.src = "images/Ninja/Jump__005.png";
	Ninja_jump6.src = "images/Ninja/Jump__006.png";
	Ninja_jump7.src = "images/Ninja/Jump__007.png";
	Ninja_jump8.src = "images/Ninja/Jump__008.png";
	Ninja_jump9.src = "images/Ninja/Jump__009.png";
	Ninja_run0.src = "images/Ninja/Run__000.png";
	Ninja_run1.src = "images/Ninja/Run__001.png";
	Ninja_run2.src = "images/Ninja/Run__002.png";
	Ninja_run3.src = "images/Ninja/Run__003.png";
	Ninja_run4.src = "images/Ninja/Run__004.png";
	Ninja_run5.src = "images/Ninja/Run__005.png";
	Ninja_run6.src = "images/Ninja/Run__006.png";
	Ninja_run7.src = "images/Ninja/Run__007.png";
	Ninja_run8.src = "images/Ninja/Run__008.png";
	Ninja_run9.src = "images/Ninja/Run__009.png";
	tile1.src = "images/Tiles/2.png";
	tile2.src = "images/Tiles/5.png";
	tileSkyLeft.src = "images/Tiles/13.png";
	tileSkyRight.src = "images/Tiles/15.png";
	mushroom1.src = "images/Object/Mushroom_1.png"
}

function drawNinja(){
	//Ninja JUMP
	if(ninjaInAir && ninjaJump <= 150 && ninjaJump > 135){
		drawImageSprite(Ninja_jump0, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= 135 && ninjaJump > 100){
		drawImageSprite(Ninja_jump1, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= 100 && ninjaJump > 60){
		drawImageSprite(Ninja_jump2, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= 60 && ninjaJump > 10){
		drawImageSprite(Ninja_jump3, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= 10 && ninjaJump > -40){
		drawImageSprite(Ninja_jump4, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= -40 && ninjaJump > -70){
		drawImageSprite(Ninja_jump5, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= -70 && ninjaJump > -90){
		drawImageSprite(Ninja_jump6, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= -90 && ninjaJump > -115){
		drawImageSprite(Ninja_jump7, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= -115 && ninjaJump > -130){
		drawImageSprite(Ninja_jump8, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaInAir && ninjaJump <= -130 && ninjaJump > -150){
		drawImageSprite(Ninja_jump9, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	//NINJA RUN
	
	if(ninjaRunning && ninjaRunningTime == 0 && !ninjaInAir){
		drawImageSprite(Ninja_run0, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 1 && !ninjaInAir){
		drawImageSprite(Ninja_run1, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 2 && !ninjaInAir){
		drawImageSprite(Ninja_run2, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 3 && !ninjaInAir){
		drawImageSprite(Ninja_run3, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 4 && !ninjaInAir){
		drawImageSprite(Ninja_run4, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 5 && !ninjaInAir){
		drawImageSprite(Ninja_run5, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 6 && !ninjaInAir){
		drawImageSprite(Ninja_run6, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 7 && !ninjaInAir){
		drawImageSprite(Ninja_run7, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 8 && !ninjaInAir){
		drawImageSprite(Ninja_run8, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
	if(ninjaRunning && ninjaRunningTime == 9 && !ninjaInAir){
		drawImageSprite(Ninja_run9, ninjaX, ninjaY, ninjaSizeX+15, ninjaSizeY)
	}
		
	
	if(!ninjaInAir && !ninjaRunning) {
		drawImageSprite(Ninja_idle, ninjaX, ninjaY, ninjaSizeX, ninjaSizeY)
	}
    
}
function drawMushroom() {
    for(i=0;i<mushroomList.length;i++){
        drawImageSprite(mushroom1, mushroomList[i].x, mushroomList[i].y, mushroomObject.width, mushroomObject.height)
        if(mushroomList[i].y > 1600){
            mushroomList.splice(i,1)
        }
    	mushroomList[i].y += mushroomObject.speed;
        
        
    }
}

function mushroomCreation() {
	if(mushroomTimer % 100 == 0){
		mushroomList.push({x: Math.random()*550, y: 0})
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

function drawAll() {
    drawTiles();
    mushroomCreation();
    drawMushroom();
    drawNinja();
    mushroomTimer++;
}