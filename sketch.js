
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ; 
var ground ;
var Rwall1 ;
var Rwall2 ;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
	
     var ball_option={
		 isStatic:false,
		 restitution:0.5,
		 friction:0,
		 dencity:1.4
	 }
	 //Create the Bodies Here.
	 ball =Bodies.circle(100,100,30,ball_option)
	 World.add(world,ball);
      
	 var ground_option = {
		 isStatic:true,

	 }
	 ground = Bodies.rectangle(400,390,800,30,ground_option)
	 World.add(world,ground)

	 var Rwall1_option = {
		 isStatic:true,
	 }
	 Rwall1 = Bodies.rectangle(530,340,20,70,Rwall1_option)
	 World.add(world,Rwall1)

	 var Rwall2_option = {
		 isStatic:true,
	 }
	 Rwall2 = Bodies.rectangle(650,320,20,110,Rwall2_option)
	 World.add(world,Rwall2)

	Engine.run(engine);
	}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  rect(ground.position.x,ground.position.y,800,30)
  rect(Rwall1.position.x,Rwall1.position.y,20,70)
  rect(Rwall2.position.x,Rwall2.position.y,20,110)
  ellipse(ball.position.x,ball.position.y,20)

  
  if(keyCode === UP_ARROW){
	keypressed();
  }

  
}
 function keypressed(){
 //write code here to applyforce to ball baody
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0});
	 
 }
