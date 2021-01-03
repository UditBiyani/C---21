var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 750, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,canvas.height/2,20,20);
  car.velocityX = 8;

  wall = createSprite(1000,canvas.height/2,20,200);

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(Touching(car,wall)){
    text("Touching",500,500);
    car.shapeColor = "red";
  wall.shapeColor = "red";
  
  }

  else{
    car.shapeColor = "green";
  wall.shapeColor = "green";
  text("notTouching",500,500);
  }

  bounceOff(car,wall);
  
  drawSprites();
}

