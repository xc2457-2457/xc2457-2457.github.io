// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(600,600);
  randomNumber();
}

function draw() {
  background(220);
  
}

function randomNumber(){
  let x =100;
  while(x<= 500){
    let randomNum = round(random(1,100));
    fill(200,80,80); noStroke();
    circle(x,200,randomNum);
    fill(0);
    text(randomNum,x,200);
    x += 40;
    
  }
}
