// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let currentback = 0;

let bcolor = ['orange', 'aqua', 'gray', 'blue'];
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {




  background(220);
  fill(bcolor[currentback]);
  rect(0, 0, width, height);
  fill(255, 255, 120);

  circle(mouseX, mouseY, 40);
  noStroke();
  fill(255, 255, 170);
  triangle(-30, height, 50, 50, 350, height);
  triangle(-30, height, width / 2, 50, width, height);
  triangle(width, height, width, 50, 350, height);
  fill(155, 200, 100);
  circle(width / 2 - 200, height + 100, 330);
  fill(155, 220, 100);
  circle(width / 2 + 200, height + 100, 330);
  fill(155, 230, 100);
  circle(width / 2, height + 100, 400);






}
function mousePressed() {
  print("aaa");
  if (mouseButton === CENTER) {
    currentback++;// when the left mouse is clicked
  }
  if (currentback === 4) {        //the "currentBack" variable changes
    currentback = 0;         //the "currentBack"will not count to 4,it will reset to 0
  }
}
