//Matter.js - physics engine library
//3 objects of matter.js 
//1. Matter.Engine - laws of physics , auto there is a world created
//2. Matter.World - Earth
//3. Matter.Bodies - Human Being
// namespacing - making it shorter
//var - its value can be changed anytime
//const - it's values are never change
 const Engine = Matter.Engine
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine,world,ground;
var ball
function setup() {
  //create the engine - Engine.create()
  engine = Engine.create() //when an engine is created auto a world is also created (world is called as engine.world)
  world = engine.world;

  createCanvas(400,400);

  //When we create a body it is created in the computer memory
  //Bodies.rectangle(x,y,width,height), Bodies.circle(x,y,radius)
  //Static -means constant, stationary at a place n doesn't move
  //Gravity - isStatic (true(not follow gravity) or false(it will follow gravity))

  //ground body - rectangle

  var goptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,goptions);
  //Add the body to the world
  World.add(world,ground); 

  //creating ball body
  //bounciness-restitution
  var boptions={
    restitution:0.7
  }
  ball = Bodies.circle(200,200,20,boptions)
  

  World.add(world,ball);


}

function draw() {
  //Updating the engine - Engine.update()
  Engine.update(engine)
  background(0);  //0-black, 255-white

  //rectMode() and rect()
  //fill("color") - to color the shape
  fill("brown")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10);
  
//ellipse (x,y,width,height) is used to draw a circle
//ellipseMode(RADIUS)isused to consider width and height as radious to draw a perfect circle
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)




  

}