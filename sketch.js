var trex, trex_running, edges;
var groundImage;
var invisibleGround;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground = createSprite(300, 190, 600, 15)
  ground.velocityX = -2
  ground.addImage("ground", groundImage)
  ground.x = ground.width/2

  invisibleGround = createSprite(300, 190, 600, 15)
  invisibleGround.visible = false
}


function draw(){
  //set background color 
  background("white");
  console.log(trex.y)
  
  //logging the y position of the trex
  
  if (ground.x < 0){
    ground.x = ground.width/2
  }


  //jump when space key is pressed
  if(keyDown("space") && trex.y > 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}