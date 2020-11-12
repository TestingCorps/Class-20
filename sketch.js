var movingRect, fixedRect;
var square1, square2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect = createSprite(200, 200, 80, 40);
  movingRect.shapeColor="green";

  square1 = createSprite(100,100,30,30);
  square1.shapeColor="purple";
  square1.velocityX = 5;
  square2 = createSprite(700,100,30,30);
  square2.shapeColor="blue";
  square2.velocityX = -5;

}

function draw() {
  background(225,225,225);

  movingRect.x = mouseX
  movingRect.y = mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }


  if(square1.x-square2.x<square1.width/2+square2.width/2 && 
    square2.x-square1.x<square1.width/2+square2.width/2){
      square1.velocityX *= -1;
      square2.velocityX *= -1;
  }
  if(
    square1.y-square2.y<square1.height/2+square2.height/2 && 
    square2.y-square1.y<square1.height/2+square2.height/2){
      square1.velocityY *= -1;
      square2.velocityY *= -1;
  }
  drawSprites();
}