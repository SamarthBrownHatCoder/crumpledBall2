
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin,ground;

function preload()
{
	img=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(75,360);
	ground = new Ground(600,380,1200,20);

	//sides of a dustbin
	side1 = new Dustbin(500,395,20,100);
	side2 = new Dustbin(692,395,20,100);
	side3 = new Dustbin(600,375,200,20);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ball.display();

  imageMode(CENTER)
  image(img,600,295,150,150)
  
  ground.display();
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:50,y:-85}); 
		} 
	}




