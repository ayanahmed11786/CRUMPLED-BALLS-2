
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dustbin1, dustbin2, dustbin3, dustbinimg, dustbin;

function preload()
{
   dustbinimg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(50,600,10,10);

  dustbin = createSprite(900,570);
  dustbin.addImage(dustbinimg);
  dustbin.scale = 1.7;

  ground = new Ground(550,670,width-100,20);

  dustbin1 = new Dustbin(900,655,185,10);
	dustbin2 = new Dustbin(990,570,5,180);
	dustbin3 = new Dustbin(810,570,5,180);

	Engine.run(engine);
  
}


function draw() {

  background(230);
  ellipseMode(RADIUS);
  paper1.display();

  rectMode(CENTER);

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   Body.applyForce(paper1.body,paper1.body.position,{x:23,y:-17});
   
	 }
   }

