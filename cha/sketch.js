// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ball1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = 60;
  let y = 60;
  let d = 60;
}

function draw() {
  background(220);
  ball.display();
}

class ball{
  constructor(x,y,d){
    this.x = x; this.y = y; this.d = d;
    this.speed = random(2,10);
  }
  display(){
    rectMode(CENTER);
    circle(this.x,this.y,this.d);
  }
}


