const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var bike;
var obstacle=[]
var Score=0;
var flag=0

var obsx,obsy;

function preload() {
  //preload the images here
  backgroundImg = loadImage("images/GamingBackground.png")
 
  }




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
 ground1=new Ground(10000,800,20000,100);
 bike=new Bike(100,600,100,100)
 end=new End(19899,550,100,570) 












}




function draw() {
  Engine.update(engine);
  background("sky blue")
 background(backgroundImg)


ground1.display();
bike.display();
obstacle1.display()
end.display()

if(frameCount%60===0){
  Score=Score+1

}

if(frameCount%40===0){
 obstacle.push(new Obstacle(random(1000,displayWidth+19000),-10))
 }

 for (var j = 0; j < obstacle.length;j++ ){
  
  obstacle[j].display()
}


camera.position.x=bike.body.position.x;
 camera.position.y=bike.body.position.y
// if(camera.position.x>2300){ 
 //  Matter.Body.setPosition(ground1.body,{x:camera.position.x,y:700}); }

   textSize(20)
   text(' score =  '+Score
   ,bike.body.position.x,300)
   



textSize(20)
text(' Press Right Arrow Key To Move Bike  ',0,450)
text("Press Up Arrow Key To Jump Bike ",0,500)

}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){

    Matter.Body.applyForce(bike.body,{x:bike.body.position.x,y:bike.body.position.y},{x:0.3,y:0});
  }


  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(bike.body,{x:bike.body.position.x,y:bike.body.position.y},{x:0,y:-0.3});
 
    
 
 
  }



}

