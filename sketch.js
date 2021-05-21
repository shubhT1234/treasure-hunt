const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies ;
var engine,world;
var backgroundImg;
var canvas, backgroundImage;
var ranvalue;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player1;
var form, player, game;
var block1img,block2img,block3img,block4img,block5img,block6img;
var block1,block2,block3,block4,block5,block6;
var screen2;
function preload(){
  backgroundImg=loadImage("images/background.jpg");
 block1img=loadImage("images/pinkblock.png");
 block2img=loadImage("images/yellowblock.png");
 block3img=loadImage("images/orangeblock.png");
 block4img=loadImage("images/darkblueblock.png");
 block5img=loadImage("images/greenblock.png");
 block6img=loadImage("images/blueblock.png");
screen2=loadImage("images/screen2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-240);
  engine=Engine.create();
  world= engine.world;
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  if(playerCount == 3){
    game.update(1);
  }
  if(gameState == 1){
    clear();
    game.play();
   
    if(frameCount%200==0){
  ranvalue=Math.round(random(1,10));
     game.randomBlocks();

      }
  }
  if(gameState==2){
    game.end();
  }
 
  console.log(ranvalue);
  
  drawSprites();
}
