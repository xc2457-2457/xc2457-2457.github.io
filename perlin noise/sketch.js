// Project Title
// Gary Wang
// March, 4th, 2025
//
//Starter Code for our
//Terrain Generation Project
let totalheight = 0;
let rectWidth =30;
let start = 0;
let average = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  
}



function generateTerrain(){
  let xoff = start;
  let peaky = height
  let peakx;
  let rectnum = width/rectWidth;
  for (let x = 0; x < width; x+= rectWidth) {
    let y = noise(xoff) * height; //noise(xoff)=0-1 height increase through noise value decrease
    
    xoff += 0.01;
    
    rect(x, y, rectWidth, height - y);
    if(y<peaky){//find the highest point
      peaky = y
      peakx = x
    }
    
    let high = height-y;
    totalheight += high;
    

     
    
  }
  start += 0.01;
  average = totalheight/rectnum;
  drawflag(peakx,peaky) 
  averageh();
}
function drawflag(x,y){
  fill(80,90,170);
  circle(x,y,30)
  
}




function draw() {
  background(220);
  noStroke()
  fill(100,200,200);
  generateTerrain();
  
  
  
  
}
function keyPressed(){
  if(key === 'a'){
    rectWidth = rectWidth - 5;
    
  }
  if(key === 'd'){
    rectWidth = rectWidth + 5;
    
  }
  if(rectWidth<=0){
    rectWidth = 1;
  }

}

function averageh(){
  fill(100,100,255);
  line(0,average,width,average);

}

