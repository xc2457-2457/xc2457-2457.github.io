// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function reCircle(){
  circle(x,y,d);
  if (d >= 10){
    reCircle(x,y,d*0.9);
  }
  
}

function cantor(x,y,len,depth){
  if(depth > 1){
    line(x,y,x+len,y);
    y+= 20;

    cantor(x,y,len/3,depth-1);
    cantor(x + len*2/3,y,lem/3,depth-1);
  }
}

function draw() {
  //background(220);
  reCircle(width/2,height/2,width);
}
