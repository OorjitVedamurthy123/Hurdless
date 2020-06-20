var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var score = 0;

//var hurdlesGroup
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var hurdles;
var hurdles2;
var hurdleGroup;
var hurdleGroup;
function preload(){
  track = loadImage("images/something2345678.jpg");
  car1_img = loadImage("images/runner.png");
  car2_img = loadImage("images/runner2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  head = loadImage("images/hurdles.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-150);
  database = firebase.database();
  game = new Game();
 
  game.getState();
  game.start();

 
  hurdleGroup = new Group();
  hurdleGroup2 = new Group();
  
}


function draw(){
  
  spawnHurdles();
  spawnHurdles2();
  
 
  if(playerCount === 2){
    game.update(1);

  }
  if(gameState === 1){
    clear();
    game.play();
   
  }
  if(gameState === 2){
    game.end();
    
  
  }
  if(gameState === 3){
    game.end();
    //hurdleGroup2.destroyEach();
  }
  
  score = Math.round(World.frameCount/4);
    
  
  
  
  
  drawSprites();
  
  if(hurdleGroup.collide(game.car1)){
    gameState = 2;
  }
  if(hurdleGroup2.collide(game.car2)){
    gameState = 3;
  }
 
}
function spawnHurdles(){
if(World.frameCount % 60 === 0) {
    
  //creating the obstacles
  
  hurdles = createSprite(16000,478,10,40);
 
 //velocity of the obstacle
  hurdles.velocityX = -32;
  
  //generate random obstacles
  //different animations of different obstacles
  
  //var rand = randomNumber(1,6);
  hurdles.addImage("obstacle",head);
  
 // assign scale and lifetime to the obstacle           
  //obstacle.scale = 0.3;
  hurdles.lifetime = 14000;
 // add each obstacle to the group
  hurdleGroup.add(hurdles);
 // console.log(hurdleGroup);
}
}
function spawnHurdles2(){
  if(World.frameCount % 60 === 0) {
      
    //creating the obstacles
    
    hurdles2 = createSprite(16000,650,10,40);
   
   //velocity of the obstacle
    hurdles2.velocityX = -32;
    
    //generate random obstacles
    //different animations of different obstacles
    
    //var rand = randomNumber(1,6);
    hurdles2.addImage("obstacle",head);
    
   // assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.3;
    hurdles2.lifetime = 17000;
   // add each obstacle to the group
    hurdleGroup2.add(hurdles2);
   // console.log(hurdleGroup);
  }
  }
