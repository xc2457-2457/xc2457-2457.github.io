// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let a = [0,11,5,5,90,80,70,60];


function setup() {
  createCanvas(400,400);
  background(200);
  drawX();
  
    

  

  
}

function draw() {
  
  
}

function drawX(){
  for(i = 0;i<400;i+=40){
    circle(i,i,20);
    circle(i,400-i,20);
    
    

  }
}
