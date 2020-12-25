const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,stand,polygon,backgroundImg;
var ground,polygon_img,slingshot,blackBg;

var score = 0;

function preload()
{  
  getBackgroundImg();
  bg = loadImage("Orange.jpg");
  polygon_img = loadImage("hexa 2.jpg");
  blackBg = loadImage("Day Background.jpg");
}

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world = engine.world;
  
  block1 = new Block(330,395,30,40);
  block2 = new Block(360,395,30,40);
  block3 = new Block(390,395,30,40);
  block4 = new Block(420,395,30,40);
  block5 = new Block(450,395,30,40);
  block6 = new Block(360,335,30,40);
  block7 = new Block(390,335,30,40);
  block8 = new Block(420,335,30,40);
  block9 = new Block(390,295,30,40);
  block10 = new Block(930,235,30,40);
  block11 = new Block(960,235,30,40);
  block12 = new Block(990,235,30,40);
  block13 = new Block(1020,235,30,40);
  block14 = new Block(1050,235,30,40);
  block15 = new Block(960,195,30,40);
  block16 = new Block(990,195,30,40);
  block17 = new Block(1020,195,30,40);
  block18 = new Block(990,155,30,40);

  this.polygon = Bodies.circle(100,200,20);
  World.add(world,this.polygon);

  slingshot = new Slinglaunch(this.polygon,{x : 100,y: 200});

  stand = new Ground(650,485,1300,30);
  stand1 = new Ground(990,250,200,10);
  stand2 = new Ground(390,400,200,10);
  
}

function draw() {
  background(255);
  if (backgroundImg)
      background(backgroundImg);

  Engine.update(engine);

  stroke("black")

  // Dragging and Releasing
  textSize(20);
  fill("Red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",20,30);
  
  // Second chance(Space key)
  text("Press SPACE to get second chance",850,460);
  textSize(20);
  fill("Red");

  //Score
  text("Score : " +score,850,30);
  textSize(20);
  fill("Red");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display(); 
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  stand.display();
  stand1.display();
  stand2.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  
  // Image
  imageMode(CENTER);
  image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);
  
  slingshot.display();
  }

function keyPressed(){
  if (keyCode === 32){
    slingshot.attach(this.polygon);
  }
  }

function mouseDragged() {
  Matter.Body.setPosition(this.polygon,{x : mouseX, y : mouseY})
}

function mouseReleased(){
slingshot.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "Day Background.jpg";
  }
  else{
      bg = "Night Background.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}