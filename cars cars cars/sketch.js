//cars cars cars
// Xinchen Yao
// 4.7 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Cars = [];//array
let botlane = [];
let toplane = [];
let pause = 0;// 120 = pause, 0 = move
let lights = [];


let rectwidth = 45;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  botlane = [height/2+height/16,//2 lane on the top
              height/2+height/8];

  toplane = [height/2-height/16,
    height/2-height/8];//2 lane on the bottom

  
  for(let i = 0; i<=10;i++){//nums of cars
    let thelane = random(botlane);//thelane = random lane on bottom
    
    let type=int(random(0,2));//random truck or simple car
    Cars.push(new car(type,random(width),thelane,1));//push to the array 1 = direction toward east

  }
  for(let i = 0; i<=10;i++){//same as above
    let thelane = random(toplane);
    
    let type=int(random(0,2));
    Cars.push(new car(type,random(width),thelane,0));

  }

  
  
}

function mousePressed(){
  let direction;// toward west or east
  let x;//x pos
  let y;//y pos
  let type;//veichle type
  if(keyIsDown(SHIFT)){
    if(mouseButton === LEFT){
      direction = 0; //toward west
      x = width;//add cars at width
      y = random(toplane);//random lane on the top
      type = int(random(0,2));//random type

    }
    
  }

  else if(mouseButton ===LEFT){

  
    direction = 1;//same as above
    x = 0;
    y = random(botlane);
    type = int(random(0,2));
  }
  Cars.push(new car(type,x,y,direction));//push

}


function keyPressed(){
  if(key === " "){//if space pressed
    pause = 120;// set pause = 120

    if(pause>0){
      lights.push(new light(width/2,height/2));
      light.display();
    }
    


  }
}

function draw() {
  background(220);
  drawRoad();
  
  if (pause>0){// 120 frame = 2 seconds
    pause--;// - 60 per second, take 2 seconds to - 120
  }
  for(let car of Cars){//for loop car replace cars
    car.display();
    if(pause === 0 ){//move if pause = 0
      
      car.move();
      car.action();
  

    }
  }
  for(let light1 of lights){//for loop 
    light1.display();
    if(pause===0){
      lights.splice(0,1);//splice after 2 sec
    }
  
  }
}


function drawRoad(){
  fill(0);
  rect(0,height/4,width,height/2);// draw road
 
  for (i=0; i<=width; i+=rectwidth){
    fill(255);
   
    rect(i,height/2,rectwidth-15,3);//mid lane
  }
}
class car{
  constructor(type,x,y,direction){// type = random 0 or 1 x = random width y = thelane direction = 1 or 2
    this.x = x; this.y = y; this.speed = random(2,5);this.type = type; this.direction = direction
    this.color = color(random(255),random(255),random(255));

  }
  display(){
    if(this.type === 0){//truck
      fill(this.color);
      rect(this.x,this.y,40,40);
      rect(this.x+40,this.y,20,40);

    }
    else if(this.type === 1){//simple car
      fill(this.color);
      rect(this.x,this.y,60,30);
      fill(150);
      rect(this.x+40,this.y+30,15,10);
      rect(this.x,this.y+30,15,10);
      rect(this.x+40,this.y-10,15,10);
      rect(this.x,this.y-10,15,10);

    }
    
    

  }
  move(){
    if( this.direction === 1){//toward east
      this.x += this.speed;//move by this.speed
      if(this.x > width){//go to 0 if cars touch width
        this.x = 0;
        this.y = random(botlane);//go to new lane at bottom
      }    
    }
    if( this.direction === 0){//same as above
      this.x -= this.speed;
      if(this.x < 0){
        this.x = width;
        this.y = random(toplane);

      }
    }
    
    
  }
  
  changecolor(){
    this.color = color(random(255),random(255),random(255))//change color

  }

  speedup(){

    if(this.speed<15){
      this.speed += 1;//speed up
      
    }
    

    this.speed += 0.2;//speed up


  }

  speeddown(){

    if (this.speed >1){
      this.speed -=1;//speed up

    }
    
    

    this.speed -=0.2;//speed up


  }
  action(){
    if (int(random(100))===1){//1% chance to change the speed and color
      this.speedup();
    }
    if (int(random(100))===1){
      this.speeddown();
    }
    if (int(random(100))===1){
      this.changecolor();
    }
    this.display();
  }


 
}
class light{
  constructor(xp,yp){//x y pos
    this.xp = xp;
    this.yp = yp;
    this.color = color(255,0,0);//red
    this.r = 100;

  }
  display(){
    fill(this.color);
    circle(this.xp,this.yp,this.r);//red circle
  }
}

