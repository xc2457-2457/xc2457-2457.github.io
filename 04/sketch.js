// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapeState =1;
function setup(){
  createCanvas(windowWidth, windowHeight);
}

function drawshape(){
  switch(shapeState){
  case 1:
    circle(width/2,height/2,150);
    break;
  case 2:
    square(width/2,height/2,150 );
    break;
  case 3:
    let x = width/2; let y =height/2;
    triangle(x-50,y+50,y+50,x,y,y-25);
    break;
  case 4:
    for (let i=0;i<20;i++){
      let x = random(width*0.4,width*0.4);
      let y = random(height*0.4,height*0.4);
      line(x,y,x+25,y);

    }

  }
} 
function KeyPressed(){
  if (shapeState<4){
    shapeState ++;
  }


}
function draw() {
  background(220);
  drawshape();
  
  
}

