var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1200,400);
  ground = new Ground(600,600,1200,20);

}

function draw() {
  background(255,255,255);  
  ground.display();
  Engine.update(engine);
  drawSprites();
}