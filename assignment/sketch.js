// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(150,255,255);
  rect(0,0,width,140);
  fill(255,255,170);
  triangle(-30,440,50,50,350,height);
  
  fill(255,255,120);
  circle(mouseX,mouseY,40);
  noStroke();
  
  
}
