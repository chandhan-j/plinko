const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ground2,ground3,ground4;
var plinko = [];
var particle = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(480,610);
  engine = Engine.create();
  world = engine.world; 

  for(var k = 0;k <= width;k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    console.log('showing')
  }
  

  for(j = 40; j <= width; j = j + 50){
    plinko.push(new Plinko(j,75,10));
  }

  for(h = 15; h <= width - 10; h = h + 50){
    plinko.push(new Plinko(h,175,10));
  }
  
  ground = new Ground(480,600,480*2,20);
  ground2 = new Whiteground(480,585,480*2,20);
  ground3 = new Ground(480,610/2,30,480*2);
  ground4 = new Ground(0,610/2,30,480*2);




}

function draw() {
  background(0);  

  Engine.update(engine);

  if(frameCount % 60 === 0){
    particle.push(new Particles(random(width/2-10, width/2+10),10,10));
  }

  
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  for(var m = 0; m < particle.length; m++){
    particle[m].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var n = 0; n < plinko.length; n++){
    plinko[n].display();
    console.log("plinko is working")
  }


  console.log("working");


  drawSprites();
}