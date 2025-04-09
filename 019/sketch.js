// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot;

function preload(){
  pilot = loadImage("assets/aviator.png");
}
function setup() {
  createCanvas(pilot.width, pilot.height);
}

function draw() {
  background(pilot,0,0);
  loadPixels();
}
