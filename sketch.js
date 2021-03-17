var monkey;
var monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var score;
var ground;
var obstacle;
var PLAY=1;
var END=0;
var gamestate=PLAY;
function preload(){
var gameover;
 var v; 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyImage=loadAnimation("sprite_0.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameoverImage=loadImage("download.jpg");
}



function setup() 
{
  createCanvas(600,400);
  monkey=createSprite(20,330,20,20);
  monkey.addAnimation("id",monkey_running);
  monkey.scale=0.1;
   monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
ground=createSprite(20,360,8000,10);
  
  ground.x=ground.width/2;
 
  
  bananaGroup=createGroup();
  ObstaclesGroup=createGroup();
}


function draw() 
{
  background(180);
  if(gamestate===PLAY)
  {
     ground.velocityX=-5;
    if(keyDown("space")&&monkey.y>=320)
      {
        monkey.velocityY=-15;
        
      }
    monkey.velocityY = monkey.velocityY + 0.8;
    if(ObstaclesGroup.isTouching(monkey))
      {
        gamestate=END;
      }
    if(bananaGroup.isTouching(monkey))
      {
     
        bananaGroup.destroyEach();
      
      }
        
        score=(frameCount/frameRate());
         text("SurvivalTime"+score,500,20);
    SpawnBananas();
     SpawnObstacles();
  }
  if(gamestate===END)
  {
    monkey.velocityY=0;
    ground.velocityX=0;
    obstacle.velocityX=0;     
   gameover=createSprite(300,200,400,400);
   gameover.addAnimation("id2",gameoverImage);
  gameover.scale=2.3;
    
  }  
  monkey.collide(ground); 
  drawSprites();
  
  
}
   function SpawnBananas()
{
 if(frameCount%80===0)
   {
  banana=createSprite(600,Math.round(random(130,250)),40,40)
  banana.addAnimation("bananaImage",bananaImage);
    banana.scale=0.1;
     
     banana.velocityX=-6;
    bananaGroup.add(banana);
   }
}
function SpawnObstacles()
{
  if(frameCount%60===0)
    {
   obstacle=createSprite(600,320,20,20)
  obstacle.addAnimation("id", obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-6;
  ObstaclesGroup.add(obstacle);
  }
}



