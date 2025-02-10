// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let boxX=200;
let boxY=100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
  background(220);
  drawBox();
}
function drawBox(){
  
  noStroke();
  fill(255,255,155);

  rect(200,200,50,50,30,30,0,0);
  rect(200,250,5,30);
  rect(245,250,5,30);
  fill(255,0,0);
  circle(215,225,3);
  circle(235,225,3);
  
  rect(215,235,20,2);
  



}

function keyPressed(){
  if(key ==="a"){
    boxX=0;

  }
  if(keyCode === ESCAPE){
    boxX = width * 0.85;
    boxY = width * 0.85;
  }
  if(key ==="b"){
    boxX=400;
  }
  
}