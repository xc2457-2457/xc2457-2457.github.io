//perlin noise
//Xinchen Yao
//Mar 4 2025


let rectWidth =30;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}



function generateTerrain(){
  let xoff = start;
  let peaky = height;
  let peakx;
  let rectnum = width/rectWidth;//amount of rect
  let totalheight = 0;
  let average = 0;
  for (let x = 0; x < width; x+= rectWidth) {
    let y = noise(xoff) * height; //noise(xoff)=0-1 height increase through noise value decrease
    
    xoff += 0.01;
    
    rect(x, y, rectWidth, height - y);
    if(y<peaky){//find the highest point
      peaky = y;
      peakx = x;
    }
    
    
    

    start += 0.00003;//speed
    
    totalheight +=y;//add all the height of rect
    average = totalheight/rectnum;//total/amount = average
    
    
    
  }
  
  
  
  drawflag(peakx,peaky);
  averageh(average);
  
}
function drawflag(x,y){
  fill(80,90,170);
  circle(x,y-100,50);
  rect(x-15,y-100,30,100);
  
}




function draw() {
  background(220);
  noStroke();
  fill(100,200,200);
  generateTerrain();
  if(keyIsDown(LEFT_ARROW)){//change the width of rect
    rectWidth = rectWidth - 0.1;
    
  }
  if(keyIsDown(RIGHT_ARROW)){
    rectWidth = rectWidth + 0.1;
    
  }
  if(rectWidth<=0){
    rectWidth = 0.1;
  }
  
  
  
  
}


function averageh(yvalue){
  fill(200,30,30);
  rect(0,yvalue,width,10);

}



