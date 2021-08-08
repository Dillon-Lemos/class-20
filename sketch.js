var fixedRect
var movingRect
function setup() {
  createCanvas(1000,800);
  fixedRect= createSprite(600, 400, 50, 80);
  fixedRect.shapeColor ="blue"
  fixedRect.debug =true
  movingRect= createSprite(400, 200, 50, 80);
  movingRect.shapeColor ="blue"
  movingRect.debug =true
}

function draw() {
  background(0); 
  movingRect.x =World.mouseX
  movingRect.y =World.mouseY

if (fixedRect .x -movingRect.x<movingRect.width/2+fixedRect.width/2 &&
 movingRect.x -fixedRect .x <movingRect.width/2+fixedRect.width/2
 && fixedRect .y -movingRect.y<movingRect.height/2+fixedRect.height/2&&
 movingRect.y -fixedRect .y <movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor ="purple"
  movingRect.shapeColor ="purple"


}
else{
  fixedRect.shapeColor ="blue"
  movingRect.shapeColor ="blue"



}

  drawSprites();
}