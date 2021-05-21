class Game {
    constructor(){
     
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
    }
  
    play(){
      form.hide();
     
      image(screen2,0,0,1536,1000);
      line(512,0,512,864);
      line(1024,0,1024,864);
      line(1536,0,1536,864);
      
      
    }

    async randomBlocks(){
      if(ranvalue==1 ){
        block1=createSprite(200,150);
        block1.addImage(block1img);
        block1.velocityY=2.5;

        block1.scale=0.6;
    
      }
      if(ranvalue==2){
        block1=createSprite(200,150);
        block2=createSprite(200,192);
        block1.velocityY=2.5;
        block2.velocityY=2.5;

         block1.scale=0.6;
         block2.scale=0.6;
    
        block1.addImage(block2img);
        block2.addImage(block2img);
    
      }
      if(ranvalue==3){
        block1=createSprite(200,150);
        block2=createSprite(242,150);
        block1.addImage(block2img);
        block2.addImage(block2img);
        block2.velocityY=2.5;

        block2.scale=0.6;
        block1.scale=0.6;
        block1.velocityY=2.5;

    
      }
      if(ranvalue==4){
        block1=createSprite(200,150);
        block2=createSprite(242,150);
        block3=createSprite(284,150);
        block1.scale=0.6;
        block2.scale=0.6;
        block1.velocityY=2.5;
        block3.scale=0.6;
        block2.velocityY=2.5;
        block3.velocityY=2.5;
    
        block1.addImage(block3img);
        block2.addImage(block3img);
        block3.addImage(block3img);
    
    
      }
      if(ranvalue==5){
        block1=createSprite(200,150);
        block2=createSprite(200,192);
        block3=createSprite(200,234);
        block1.scale=0.6;
        block3.scale=0.6;
        block1.velocityY=2.5;
        block2.velocityY=2.5;
        block3.velocityY=2.5;
    
        block1.addImage(block3img);
        block2.addImage(block3img);
        block3.addImage(block3img);
        block2.scale=0.6;
    
    
      }
      if(ranvalue==6){
        block1=createSprite(200,150);
        block2=createSprite(242,150);
        block3=createSprite(242,108);
        block2.scale=0.6;
        block3.scale=0.6;
        block1.velocityY=2.5;
        block3.velocityY=2.5;
    
        block1.addImage(block3img);
        block2.addImage(block3img);
        block3.addImage(block3img);
        block1.scale=0.6;
        block2.velocityY=2.5;
    
    
      }
      if(ranvalue==7){
        block1=createSprite(200,150);
        block2=createSprite(242,150);
        block3=createSprite(284,150);
        block4=createSprite(326,150);
        block1.scale=0.6;
        block3.velocityY=2.5;
        block4.velocityY=2.5;
    
        block1.velocityY=2.5;
        block2.scale=0.6;
        block3.scale=0.6;
        block4.scale=0.6;
        block2.velocityY=2.5;
    
        block1.addImage(block1img);
        block2.addImage(block2img);
        block3.addImage(block3img);
        block4.addImage(block4img);
    
    
    
      }
      if(ranvalue==8){
        block1=createSprite(200,150);
        block2=createSprite(200,192);
        block3=createSprite(200,234);
        block4=createSprite(200,276);
        block2.scale=0.6;
        block3.scale=0.6;
        block4.scale=0.6;
        block2.velocityY=2.5;
        block3.velocityY=2.5;
        block4.velocityY=2.5;
    
        block1.velocityY=2.5;
        block1.addImage(block1img);
        block2.addImage(block2img);
        block3.addImage(block3img);
        block4.addImage(block4img);
        block1.scale=0.6;
    
    
    
      }
      if(ranvalue==9){
        block1=createSprite(200,150);
        block2=createSprite(242,150);
        block3=createSprite(200,108);
        block4=createSprite(242,108);
        block1.velocityY=2.5;
        block2.scale=0.6;
        block3.scale=0.6;
        block4.scale=0.6;
        block2.velocityY=2.5;
        block3.velocityY=2.5;
        block4.velocityY=2.5;
    
        block1.addImage(block1img);
        block2.addImage(block2img);
        block3.addImage(block3img);
        block4.addImage(block4img);
        block1.scale=0.6;
    
    
    
      }
      if(ranvalue==10){
        block1=createSprite(200,108);
        block2=createSprite(200,150);
        block3=createSprite(242,150);
        block4=createSprite(242,192);
        block1.scale=0.6;
        block2.scale=0.6;
        block3.scale=0.6;
        block4.scale=0.6;
        block3.velocityY=2.5;
        block4.velocityY=2.5;
    
        block1.addImage(block1img);
        block2.addImage(block2img);
        block1.velocityY=2.5;
        block3.addImage(block3img);
        block4.addImage(block4img);
        block2.velocityY=2.5;
    
    
    
      }
    }
      }