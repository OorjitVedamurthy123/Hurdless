class Game {
  constructor(){
    this.car1 = createSprite(-300,0);
    this.car2 = createSprite(-200,0);
    
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

   // car1 = createSprite(100,200);
   this.car1.addImage("car12",car1_img);
   this.car1.setCollider("rectangle",-80,0,0,120);
   //this.car1.debug = true;
   
    this.car2.addImage("car2",car2_img);
    this.car2.setCollider("rectangle",-80,0,0,120);
    this.car2.scale = 1;
    //this.car2.debug = true; 
   // car3 = createSprite(500,200);
  //  car3.addImage("car3",car3_img);
   // car4 = createSprite(700,200);
    //car4.addImage("car4",car4_img);
    cars = [this.car1,this.car2];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, -500,-200,17000,900);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 200;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y + 200;
        //use data form the database to display the cars in y direction
        x = displayWidth + allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
         // stroke(15);
          //fill("orange");
          //ellipse(x,y,60,60);
          fill("red");
          textSize(25);
          stroke("black");
          strokeWeight(7);
          text(player.name,x-40,y+90);
          if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance +=20
            player.update();
            text(score,x-10,y-100);
          }
          cars[index - 1].shapeColor = "orange";
          camera.position.x = cars[index-1].x;
          camera.position.y = displayHeight/2
        }
       
       // textSize(15);
       // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    
    if(keyIsDown(UP_ARROW)){
      this.car1.y = 290;
      this.car2.y = 450;
    }
    

    if(player.distance > 17100){
      gameState = 2;
      
    }
    
   
    drawSprites();
  }

  end(){
   
   //background(rgb(198,135,103));
   image(track, -500,-200,17000,900);
   player.distance > 16400;
    console.log("Game Ended");
   
   
    
 }
 

 
}
