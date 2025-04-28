// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  squareFractal(width/2,height/2,height/2);
}

function squareFractal(x,y,sidelength){
  square(x,y,sidelength);
  if(sidelength>10){
    squareFractal(x-sidelength/2,y-sidelength/2,sidelength/2);
    squareFractal(x-sidelength/2,y+sidelength/2,sidelength/2);
    squareFractal(x-sidelength/2,y-sidelength/2,sidelength/2);
    squareFractal(x-sidelength/2,y+sidelength/2,sidelength/2);
  }
}