// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridspacing = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
  
}

function loopReview(){
  for(let x = 0; x<= 40; x = x+20){
    for(let y=0;y<=40;y+=20){
      circle(x,y,gridspacing);
    }

  }
}
function roundedDist(x1,y1,x2,y2){
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(sq(a)+sq(b));
  return round(c);
}
function renderGrid(){
  for(let x = 0; x<width;x+=gridspacing){
    for(let y=0;y < height;y+=gridspacing){
      circle(x,y,gridspacing);
      let d = roundedDist(x,y,mouseX,mouseY);
      let alpha = map(d,0,150,255,alpha);
      if(d<10)
      textAlign(CENTER,CENTER);
      text(d,x,y);

    }
  }
}

function draw() {
  background(220);
  renderGrid();
}
