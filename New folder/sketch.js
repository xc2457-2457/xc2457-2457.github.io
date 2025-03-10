// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const num_circle = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawcircle();
}



function drawcircle(){
  noFill();
  let smallestdiameter = Infinity;
  let smallx,smally;
  for(let i = 0; i < num_circle;i++){
    let x = random(0,width);
    let y = random(0,height);
    let d = random(20,80);
    circle(x,y,d);

    if(d < smallestdiameter){
      smallestdiameter = d;
      smallx = x; smally = y;
    }
  }
  fill(255,255,0);
  circle(smallx,smally,smallestdiameter);
}

function draw() {
  //background(220);
}
