var stationImage;
var station;
var ship, shipImg, shipImgRight, shipImgLeft, shipImgForward, shipImgBackward;
var space;
var hasDocked=false;

function preload() {
    stationImage=loadImage("images/iss.png");
    shipImg=loadImage("images/spacecraft1.png");
    shipImgRight=loadImage("images/spacecraft4.png");
    shipImgLeft=loadImage("images/spacecraft3.png");
    shipImgForward=loadImage("images/spacecraft2.png");
    shipImgBackward=loadImage("images/spacecraft5.png");
 
   

    space=loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship=createSprite(windowWidth/6, windowHeight/1.3, 50, 50);
  ship.addImage(shipImg);
  ship.scale=0.3;
  
  station=createSprite(windowWidth/1.3, windowHeight/2,30,30);
  station.addImage(stationImage);
  station.scale=1.5;

      

}

function draw() {
  background(space);
  fill("red");
  circle(windowWidth/1.12,windowHeight/2.75,10);
  
  console.log(ship.x);
  if(!hasDocked){
    if(ship.x>=windowWidth/1 && ship.x<=windowWidth/1.4 && ship.y>=windowHeight/2.6 && ship.y<=windowHeight/2.7){
        hasDocked=true;
        text("Docked successfully",windowidth/2,windowHeight/2);
    }
  }
  if(keyWentDown("right")){
   
    ship.velocityX=5;
    ship.addImage(shipImgLeft)
  }  
  if(keyWentUp("right")){
    ship.velocityX=0;
    ship.addImage(shipImg)
  }  
  if(keyWentDown("left")){
    ship.velocityX=-5;
    ship.addImage(shipImgRight)
  }  
  if(keyWentUp("left")){
    ship.velocityX=0;
    ship.addImage(shipImg)
  }  
  if(keyWentDown("up")){
    ship.velocityY=-5;
    ship.addImage(shipImgForward)
  } 
  if(keyWentUp("up")){
    ship.velocityY=0;
    ship.addImage(shipImg)
  }   
  if(keyWentUp("down")){
    ship.velocityY=0;
    ship.addImage(shipImg)
  }  
  if(keyWentDown("down")){
    ship.velocityY=5;
    ship.addImage(shipImgBackward)
  }  
  drawSprites();
  fill("yellow");
  textSize(25);
  text("up arrow key - spaceship goes up",windowWidth/11,windowHeight/5);
  text("down arrow key - spaceship goes down",windowWidth/11,windowHeight/4.4);
  text("left arrow key - spaceship goes left",windowWidth/11,windowHeight/3.9);
  text("right arrow key - spaceship goes right",windowWidth/11,windowHeight/3.5);
  text("red circle - dock",windowWidth/11,windowHeight/3.2);
}