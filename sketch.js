


function preload(){

AstronautBathing = loadAnimation("bath1.png","bath2.png")
TheRoom = loadImage ("iss.png")
SleepingBox = loadAnimation("sleep.png")

AstronautBrushingHisTeeth = loadAnimation("brush.png")
AstronautDrinking = loadAnimation("drink1.png","drink2.png")
AstronautEating = loadAnimation ("eat1.png","eat2.png")
AstronautFeelingTheBurn = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
AstronautMoving = loadAnimation("move.png","move1.png")
}


function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400,200);
  astronaut.addAnimation("sleeping", SleepingBox);
  astronaut.scale = 0.1;

  

  }
  
  

function draw() {
  background(TheRoom); 

if(keyDown("LEFT_ARROW")){
 astronaut.addAnimation("eating",AstronautEating)
 astronaut.changeAnimation("eating",AstronautEating)
} 
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("BATHING",AstronautBathing)
  astronaut.changeAnimation("BATHING",AstronautBathing)
 } 
 if(keyDown("UP_ARROW")){
  astronaut.addAnimation("Brushing",AstronautBrushingHisTeeth)
  astronaut.changeAnimation("Brushing",AstronautBrushingHisTeeth)
 } 
 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("exercising",AstronautFeelingTheBurn)
  astronaut.changeAnimation("exercising",AstronautFeelingTheBurn)
 } 
 
 if(keyDown("m")){
  astronaut.addAnimation("flying",AstronautMoving)
  astronaut.changeAnimation("exercising",AstronautMoving)
 } 


  drawSprites()

  fill("red")
  text("M = moving",75,56)

  fill("red")
  text("Right Arrow = eating",75,70)

  fill("red")
  text("Left Arrow = bathing",75,86)

  fill("red")
  text("Down Arrow = gymming",75,100)

  fill("red")
  text("Up Arrow = brushing",75,114)
}