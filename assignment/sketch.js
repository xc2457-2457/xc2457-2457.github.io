// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let currentback=0

let bcolor =['orange','aqua','gray','blue']
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  
 
  

  background(220);
  fill(bcolor[currentback]);
  rect(0,0,width,height);
  fill(255,255,120);
  
  circle(mouseX,mouseY,40);
  noStroke();
  fill(255,255,170);
  triangle(-30,height,50,50,350,height);
  triangle(-30,height,width/2,50,width,height);
  triangle(width,height,width,50,350,height);
  fill(155,200,100);
  circle(width/2-1000,height+500,1900);
  fill(155,220,100);
  circle(width/2+1000,height+500,1900);
  fill(155,230,100);
  circle(width/2,height+500,2300);

  
  
  
  
  
}
function keyPressed() {
  if (key === 'c') {
    // Code to run.
    
    currentback++;
  }
    if(currentback ===4){
      currentback = 0;
    }

    
    
      

  
  

  

  
  


  

  
  
}