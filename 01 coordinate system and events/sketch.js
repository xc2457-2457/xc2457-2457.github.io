// Ciirdunate System and User Events
// Xinchen
// Feb 6th, 2025
//not run-to-completion, but interactive programs...
// 
// 


function setup() {
  // runs once, at the very beginning
  createCanvas(500, 500);
}

function draw() {
  //draw loop, repsats over and over forever
  //-target of 60 frames per second
  // a new image is drawn at the bottom of the loop
  background(220);
  twoCircle();
  //secret calculated delay()
  //screen updates at end of loop
}
function twoCircle(){
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(5);

  circle(200,100,50);
  noStroke();
  fill(255,0,0);
  circle(mouseX,mouseY,30);

}