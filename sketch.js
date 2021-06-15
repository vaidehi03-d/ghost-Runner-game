var tower,towerImg;
var ghost,ghostImg;
var door,doorImg,doorsGroup;
var climber,climberImg,climbersGroup;


function preload(){
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  ghostImg=loadImage("ghost-standing.png");
  
}
function setup(){
  //creating canvas
  createCanvas(600,600);
  
  //creating tower
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY=1;
  
  //creating group for door and climber
  doorsGroup=new Group();
  climbersGroup=new Group();
  
  //creating ghost
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
}
function draw(){
  background("pink");
  
  //resetting the positon of the tower
  if(tower.y>400){
    tower.y=300;
      }
  
  //making the ghost jump
  if(keyDown("space")){
    ghost.velocityY=-10;
    }
  
  //assigning gravity to ghost
  ghost.velocityY=ghost.velocityY+0.8;
  
  //moving ghost with left and right arrow key
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
      }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
      }
  
   object();
  drawSprites();
}

function object(){
  if(frameCount%240===0){
     door=createSprite(200,-50);
    climber=createSprite(200,10);
    
    door.x=Math.round(random(120,400));
    climber.x=door.x;
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY=1;
    climber.velocityY=1;
    
    door.lifetime=800;
    climber.lifetime=800;
    
    ghost.depth=door.depth;
    ghost.depth+=1;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
     }
  
}



