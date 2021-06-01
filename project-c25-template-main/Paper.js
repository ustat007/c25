class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.IMG=loadImage("paper.png")
        World.add(world, this.body);   
    }

display()
{
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.IMG,this.x, this.y, this.radius);
    pop();
};
};
