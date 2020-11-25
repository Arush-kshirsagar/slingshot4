class Ground{
    constructor(){
        var options={
            isStatic:true,
           
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y,this.width,this.height);
        rectMode(CENTER);
        pop();
    }
}