class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2,
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     image(this.image,0,0,this.width,this.height)
      pop();
    }
  };