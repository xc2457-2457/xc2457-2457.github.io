// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectX, rectY, speedX, speedY;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = 200; rectY = 300; speedX = random(3, 8); speedY = random(3, 8);
}
function draw() {
  m();
  background(80, 80, 80);
  rect(rectX, rectY, 250, 75);
}
function m() {
  rectX += speedX; rectY += speedY;
  if (rectY >= height - 75 || rectY <= 0) { speedY = speedY * -1; }
  if (rectX >= width - 250 || rectX <= 0) { speedX = speedX * -1; }
}

