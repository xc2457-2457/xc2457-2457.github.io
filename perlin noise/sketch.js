// Project Title
// Gary Wang
// March, 4th, 2025
//
//Starter Code for our
//Terrain Generation Project



function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain(frameCount*0.01);
}



function generateTerrain(){
  let xoff = frameCount*0.03;
  let peeky = height
  let peekx;
  for (let x = 0; x < width; x++) {
    let y = noise(xoff) * height; //noise(xoff)=0-1 height increase through noise value decrease
    
    xoff += 0.01;
    line(x,y,x,height);
    if(y<peeky){//find the highest point
      peeky = y
      peekx = x
    } 
    
  }
  drawflag(peekx,peeky) 
}
function drawflag(x,y){
  circle(x,y,30)
  
}




function draw() {
  background(220);
  generateTerrain();
  
  
  
}
