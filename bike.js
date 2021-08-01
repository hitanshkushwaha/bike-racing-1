class Bike {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false,
         //restitution:0.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
    
      World.add(world, this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/bike.png")
     // Matter.Body.setMass(this.body.mass,this.body.mass*5);
      this.visibility=255;
      this.remove=false;
    }
    display(){

     var pos =this.body.position;
      imageMode(CENTER);
    
     var collision=Matter.SAT.collides(this.body,obstacle1.body)
     if(collision.collided){
       flag=1
     }

    if(flag==1){


      this.visibility=this.visibility - 9;
      push()
      tint(255,this.visibility);
      image(
        this.image,
        this.body.position.x,
        this.body.position.y,
        this.weight,
        this.height
      )
      pop();
      World.remove(world,this.body);

      textSize(60)
       text("GAME OVER" ,bike.body.position.x,400)
       text("Score = "+Score,bike.body.position.x,500)
    }
      
    else{
      image(this.image,pos.x,pos.y,this.width,this.height)
    }
    
    
    
    
    
    }
  }
     
    
    
  