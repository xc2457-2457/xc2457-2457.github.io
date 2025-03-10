// Project Title
// Gary Wang
// March, 4th, 2025
//
//Starter Code for our
//Terrain Generation Project



function setup() {
  createCanvas(400, 400);
  generateTerrain();
}



function generateTerrain(){
  let xoff = 0; 
  for (let x = 0; x < width; x++) {
    let y = noise(xoff) * height; 
    
    xoff += 0.01;
    line(x,y,x,height);
  }



}
function draw() {
  background(220);
  generateTerrain();
  
  
  
}
