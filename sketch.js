const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var ball,backImg;

function preload(){
backImg=loadImage("back.png")
}


function setup() {

  
  createCanvas(1370,670);
  
  engine = Engine.create();
  world = engine.world;
 
ground = new Ground(750,630,1500,20)
box1 = new Box(700,570,70,70);
box2 = new Box(790,570,70,70);
box3 = new Box(740,500,70,70);
box4 = new Box(880,570,70,70);
box5 = new Box(840,500,70,70);
box6 = new Box(787,420,70,70);
box7 = new Box(970,570,70,70);
box8 = new Box(930,500,70,70);
box9 = new Box(880,420,70,70);
box10 = new Box(830,330,70,70);
box11 = new Box(647,494,70,70);
box12 = new Box(590,570,70,70);
box13 = new Box(690,420,70,70);
box14 = new Box(730,330,70,70);
box15 = new Box(770,250,70,70);

ball=new Ball(360,200,230,230);

rope = new Rope(ball.body,  {x:360,y:300});
enemy = new Enemy(1200,500,200,300)

}

function draw() {
  background(backImg);
 

  
  Engine.update(engine );
 

//rows.display();
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box9.display();
box8.display();
box10.display();
box11.display();
box13.display();
box12.display();
box14.display();
box15.display();

enemy.display();

ball.display();
rope.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

