class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/track.jpg")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("grey");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };