// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Cars = [];
let botlane = [];
let toplane = []


let rectwidth = 45;
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  botlane = [height/2+height/16,
              height/2+height/8]
  toplane = [height/2-height/16,
    height/2-height/8]

  
  for(let i = 0; i<=10;i++){
    let thelane = random(botlane);
    
    let type=int(random(0,2));
    Cars.push(new car(type,random(width),thelane,1));

  }
  for(let i = 0; i<=10;i++){
    let thelane = random(toplane);
    
    let type=int(random(0,2));
    Cars.push(new car(type,random(width),thelane,0));

  }
  
}

function mousePressed(){
  let direction
  let x
  let y
  let type
  if(keyIsDown(SHIFT)){
    direction = 0 
    x = width
    y = random(toplane)
    type = int(random(0,2))
  }
  else{
    direction = 1
    x = 0
    y = random(botlane)
    type = int(random(0,2))
  }
  Cars.push(new car(type,x,y,direction));

}


function draw() {
  background(220);
  drawRoad();
  for(let car of Cars){

    car.display();
    car.move();
    car.action();

  }
  
}


function drawRoad(){
  fill(0);
  rect(0,height/4,width,height/2);
 
  for (i=0; i<=width; i+=rectwidth){
    fill(255);
   
    rect(i,height/2,rectwidth-15,3);
  }
}
class car{
  constructor(type,x,y,direction){
    this.x = x; this.y = y; this.speed = random(2,5);this.type = type; this.direction = direction
    this.color = color(random(255),random(255),random(255))

  }
  display(){
    if(this.type === 0){
      fill(this.color);
      rect(this.x,this.y,40,40);
      rect(this.x+40,this.y,20,40);

    }
    else if(this.type === 1){
      fill(this.color);
      rect(this.x,this.y,60,30);
      fill(150);
      rect(this.x+40,this.y+30,15,10)
      rect(this.x,this.y+30,15,10)
      rect(this.x+40,this.y-10,15,10)
      rect(this.x,this.y-10,15,10)

    }
    
    

  }
  move(){
    if( this.direction === 1){
      this.x += this.speed;
      if(this.x > width){
      this.x = 0
      this.y = random(botlane);
      }    
    }
    if( this.direction === 0){
      this.x -= this.speed;
      if(this.x < 0){
      this.x = width;
      this.y = random(toplane);

      }
    }
  }
  
  changecolor(){
    this.color = color(random(255),random(255),random(255))

  }

  speedup(){
    this.speed += 0.2

  }

  speeddown(){
    this.speed -=0.2

  }
  action(){
    if (random(1)<0.01){
      this.speedup()
    }
    if (random(1)<0.01){
      this.speeddown()
    }
    if (random(1)<0.01){
      this.changecolor()
    }
    this.display();
  }


 
}

