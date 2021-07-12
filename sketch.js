var ankush

function setup() {
  createCanvas(1600,1600);

ankush = createSprite(200,200,20,20)


if(keyDown("LEFT_ARROW")){
  ankush.x=ankush.x-4;
}
if(keyDown("RIGHT_ARROW")){
  ankush.x=ankush.x+4;
}
if(keyDown("DOWN_ARROW")){
  ankush.y=ankush.y+4;
}
if(keyDown("UP_ARROW")){
  ankush.y=ankush.y-4;
}



}





function draw() 
{
  background("blue");
 
 
  drawSprites();

  
}




