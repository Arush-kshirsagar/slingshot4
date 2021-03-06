const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,tree,stone,boy,slingshot,ground;

function preload()
{treeImg=loadImage("Plucking mangoes/tree.png")
  
  boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new Mango(200,500,50,50);
mango2=new Mango(210,500,50,50);
mango3=new Mango(240,500,50,50);
mango4=new Mango(230,500,50,50);
mango5=new Mango(260,500,50,50);
mango6=new Mango(290,500,50,50);
mango7=new Mango(250,500,50,50);
mango8=new Mango(215,500,50,50);
mango9=new Mango(255,500,50,50);
mango10=new Mango(295,500,50,50);
mango11=new Mango(300,500,50,50);
ground=new Ground(width/2,600,width,20);
tree=createSprite(600,300,50,100);

stone=new Stone(200,200,100,100);

boy=createSprite(150,150,100,100);


slingshot=new Slingshot(stone.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  tree.display();
  slinshot.display();
  ground.display();
  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);



  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
  }
  function mouseReleased(){
      slingshot.fly();
  }


	function keyPressed(){
		if(keyCode===32){
		  Matter.body.setPosition(stone.body,{x:200,y:200});
		  slingshot.attach(stone.body) 
		}
	
}
function detectCollision(stone,mango){
	mango.body.position=mango1.body.position;
	stone.body.position=stone.body.position;
	var distance=dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango1.body.position.y)
}



