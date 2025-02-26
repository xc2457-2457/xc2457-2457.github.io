// image Basics
// Xinchen
// Feb 26,2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL,lionR;
let pinImage = [];
let currentFrame = 0;
let facing = "left";

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0; i <=8; i++){
    pinImage.push(loadImage("assets/pin-0" + i + ".png"));
    

  }
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(60);
}

function draw() {
  background(220);
  draw_lion();
  image(pinImage[currentFrame],width/2,height/2);
  if(frameCount % 3===0){
    currentFrame++;
    if(currentFrame > 8) currentFrame = 0;
  
  }

}
function draw_lion(){
  let sizeX = lionL.width/2;
  let sizeY = lionL.height/2;

  if (movedX > 0) facing = "right";
  else if(movedX < 0) facing = "left";

  if(facing ==="left"){
    image(lionL,mouseX,mouseY,sizeX,sizeY);

  }
  
  else{
    image(lionR,mouseX,mouseY,sizeX,sizeY);
  }
}