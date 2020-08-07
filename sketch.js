
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rect;
var ball1,ball2,ball5,ball3,ball4;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect = createSprite(300,20,500,40)
	ball1 = new Ball(300,300)
	ball2 = new Ball(300,300)
	ball5 = new Ball(300,300)
	ball3 = new Ball(300,300)
	ball4 = new Ball(300,300)

chain = new Chain(ball1.body,{x:100,y:300});
chain = new Chain(ball2.body,{x:200,y:300});
chain = new Chain(ball3.body,{x:300,y:300});
chain = new Chain(ball4.body,{x:400,y:300});
chain = new Chain(ball5.body,{x:500,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
    rect.display()
	ball1.display()
	ball2.display()
	ball5.display()
	ball3.display()
	ball4.display()
  drawSprites();
 
}



