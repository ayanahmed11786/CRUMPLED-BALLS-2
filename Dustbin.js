class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("dustbin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

       // imageMode(CENTER)
        //image(this.image, pos.x, pos.y, 2*this.radius, 2*this.radius);
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}