// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let xspeed,yspeed;
let totalbounces = 0;
function setup() {
  createCanvas(300, 200);
  x = width/2; y = height/2;
  xspeed =5; yspeed =3;

  textSize(30);textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  updateBall();
  text(totalbounces,width/2,height/2);
}

function updateBall(){
  x += xspeed; y += yspeed;

  if(x<0 || x > width){
    xspeed *= -1;
    totalbounces++;
  }

  if(y<0 || y > height){
    yspeed *= -1;
    totalbounces++;
  }
  circle(x,y,20);
}
