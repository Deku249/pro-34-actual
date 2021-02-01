const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,sling

function setup() 
{
  createCanvas(windowWidth/2,windowHeight/2);
  engine = Engine.create();
  world = engine.world;

  /*let canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = pixelDensity();
  let options = 
  {
    mouse : canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options)
  World.add(world, mConstraint)*/

  bob1 = new Bob (400,100,"black")
  sling = new Sling (bob1,400,85)
}

function draw() 
{
  background(220); 
  Engine.update(engine);
  
  bob1.display();

  drawSprites();
}

function mouse() 
{
  Matter.Body.SetPosition(bob.body,{x : mouseX, y : mouseX})
}

