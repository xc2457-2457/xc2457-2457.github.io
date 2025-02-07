// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variable declarations
//define your global here

tSize = 10;
let x=300;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  fill("green");
  background(220);
  textSize(tSize);
  text(mouseX+ ","+mouseY+ " "+ mouseButton,mouseX,mouseY);

  fill(100,200,100);
  square(x,200,50,5);
  if(keyIsDown(LEFT_ARROW)){
    x=x-5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x=x+5;
  }
}

function mousePressed(){
  tSize = random(5,100);
}