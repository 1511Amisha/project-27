
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	var pendulumDiameter=2*50

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulum1=new Pendulum(205,550,50);
	pendulum2=new Pendulum(305,550,50);
	pendulum3=new Pendulum(405,550,50);
	pendulum4=new Pendulum(505,550,50);
	pendulum5=new Pendulum(605,550,50);

	roof=new Roof(370,200,550,40);
	rope1=new Rope(pendulum1.body,roof.body,-pendulumDiameter*2,0);
	rope2=new Rope(pendulum2.body,roof.body,-pendulumDiameter*2,0);
	rope3=new Rope(pendulum3.body,roof.body,-pendulumDiameter*2,0);
	rope4=new Rope(pendulum4.body,roof.body,-pendulumDiameter*2,0);
	rope5=new Rope(pendulum5.body,roof.body,-pendulumDiameter*2,0);
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  
  drawSprites();
 
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



