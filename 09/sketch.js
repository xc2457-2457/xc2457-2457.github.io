// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwidth = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  rectMode(CORNER);
  for(let x = 0; x< width; x+= rectwidth){
    

    let rectHeight = random(50,500);
    let x2 = x + rectwidth;
    let y2 = height - rectHeight;
    rect(x,height,x2,y2);
  }
}

function draw() {
  //background(220);
}
