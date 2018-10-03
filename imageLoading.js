//INSTANTIATING IMAGES
var Ninja_idle = document.createElement("img"); //need this for image files
var tile1 = document.createElement("img");
var tile2 = document.createElement("img");
var tileSkyLeft = document.createElement("img");
var tileSkyRight = document.createElement("img");
var mushroom1 = document.createElement("img");



//WE ARE LOADING IMAGES
function loadImages() {
	Ninja_idle.src = "images/Ninja/Idle__000.png";
	tile1.src = "images/Tiles/2.png";
	tile2.src = "images/Tiles/5.png";
	tileSkyLeft.src = "images/Tiles/13.png";
	tileSkyRight.src = "images/Tiles/15.png";
	mushroom1.src = "images/Object/Mushroom_1.png"
}

function drawNinja(){
    drawImageSprite(Ninja_idle, ninjaX, ninjaY, ninjaSizeX, ninjaSizeY)
}
function drawMushroom() {
    for(i=0;i<mushroomList.length;i++){
        drawImageSprite(mushroom1, mushroomList[i].x, mushroomList[i].y, mushroomSizeX, mushroomSizeY)
    }
}
function mushroomCreation() {
	if(mushroomTimer % 50 == 0){
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