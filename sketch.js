var iss,spacecraft,hasDocked=false,issImg;
var scImg1,scImg2,scImg3,scImg4;
function preload(){
   issImg = loadImage("iss.png");
   bg = loadImage("spacebg.jpg");
   scImg1 = loadImage("spacecraft1.png");
   scImg2 = loadImage("spacecraft2.png");
   scImg3 = loadImage("spacecraft3.png");
   scImg4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(1250,625);
  
   iss=createSprite(330, 130, 50, 50);
    iss.addImage(issImg)
    iss.scale = 0.25;
   spacecraft = createSprite(285,240);
   spacecraft.addImage(scImg1);
   spacecraft.scale=0.15
}

function draw() {
  background(bg);  
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg4);
      spacecraft.x = spacecraft.x -1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg3);
      spacecraft.x = spacecraft.x + 1
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scImg2);
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
  }

}
  if(spacecraft.y<=(iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful",200,300);
  }

  drawSprites();
}