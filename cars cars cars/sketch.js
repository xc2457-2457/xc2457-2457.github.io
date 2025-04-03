// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Cars = [];
let rectwidth = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i<=5;i++){
    Cars.push(new car(0,height/2));

  }
  
}


function draw() {
  background(220);
  drawRoad();
  for(let car of Cars){
    car.display();
    car.move();

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
  constructor(x,y){
    this.x = x; this.y = y; this.speed = random(2,5);this.color = 150;

  }
  display(){
    fill(this.color);
    rect(this.x,this.y,20,40);

  }
  move(){
    for(let w = 0;w<width;w+=this.speed){
      
    }
    this.x += this.speed;
    if(this.x > width){
      
    }
  } 

 
}

