var ground;
const Engine = Matter.Engine;
var box2;
const World = Matter.World;
 const Bodies = Matter.Bodies;
  var engine,world,box1,ball;
   function setup(){
      createCanvas(400,400);
       engine = Engine.create();
        world = engine.world;
box1= new Box(250,350,50,50);
var  groundoptions={
isStatic:true 
}
box2  = new Box(210,290,50,50);
ground=Bodies.rectangle(200,380,400,20,groundoptions);
 World.add(world,ground);
          } 
            function draw(){ 
              background(255,255,255);
   Engine.update(engine);
 box1.display();
 box2.display();
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }



























