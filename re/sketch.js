// 2D Array Basics
// 
// April 3, 2025
// Working with 2D Arrays, Visualizations
//0   255
let grid = []
  
let mode = "crossmode";
let squareSize = 60;
const NUM_ROWS = 3; const NUM_COLS = 5;


function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  random11();
  
}

function keyPressed(){
  if(key === ' '){
    if (mode === "crossmode"){
      mode = "square"
    }else{
      mode = "crossmode"
    }
    
  }
}

function random11(){
  for (let y = 0; y < NUM_ROWS; y++) {
    grid[y] = [];
    for (let x = 0; x < NUM_COLS; x++) {
      grid[y][x] = random([0,255]);
      
    }
  }

  
}



function renderGrid() {
  // interpret the information in the 2D array, and draw
  // a grid of colors on the screen to reflect it.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }

  let greenx = getCurrentX();
  let greeny = getCurrentY();

  noStroke();
  fill(0,255,0,50);
  if (mode === "crossmode"){
    square(greenx*squareSize,greeny*squareSize,squareSize);
  if (greeny > 0) square(greenx * squareSize, (greeny - 1) * squareSize, squareSize);
  if (greeny < NUM_ROWS - 1) square(greenx * squareSize, (greeny + 1) * squareSize, squareSize);
  if (greenx > 0) square((greenx - 1) * squareSize, greeny * squareSize, squareSize);
  if (greenx < NUM_COLS - 1) square((greenx + 1) * squareSize, greeny * squareSize, squareSize);

  }
  else if(mode ===" square"){
    if (greenx >= NUM_COLS - 1) greenx = NUM_COLS - 2;
    if (greeny >= NUM_ROWS - 1) greeny = NUM_ROWS - 2;
    greenx = max(0, greenx);
    greeny = max(0, greeny);

    square(greenx * squareSize, greeny * squareSize,squareSize);
    square((greenx + 1)*squareSize, greeny*squareSize,squareSize);
    square(greenx*squareSize, (greeny + 1)*squareSize,squareSize);
    square((greenx + 1)*squareSize, (greeny + 1)*squareSize,squareSize);

    


  }
  

  

  
}

function getCurrentY() {
  //determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize);
}

function getCurrentX() {
  //determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / squareSize);
}

function mousePressed() {
  //flip current tile to a random greyscale value
  //only do something if mouseX/mouseY are on the canvas...
  
  let x = getCurrentX();
  let y = getCurrentY();
  
  //always: flip the "current" tile
  if(keyIsDown(SHIFT)){
    flip(x,y);

  }
  else{
    if(mode === "crossmode"){
      flip(x,y);
    //sometimes: (depending on position) flip the neighbours
      if(y > 0) flip(x, y-1);  //NORTH 
      if(x > 0) flip(x-1, y);  //WEST
      if(x < NUM_COLS-1) flip(x+1, y); //EAST
      if(y < NUM_ROWS-1) flip(x, y+1); //SOUTH


    }
    else if (mode === "square") {
      
      if (x >= NUM_COLS - 1) x = NUM_COLS - 2;
      if (y >= NUM_ROWS - 1) y = NUM_ROWS - 2;
      x = max(0, x);
      y = max(0, y);
    
      flip(x, y);
      flip(x + 1, y);
      flip(x, y + 1);
      flip(x + 1, y + 1);
    }
  
 }
}

function flip(x, y){
  //take a tile and invert its value
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}





function draw() {
  background(220);
  renderGrid();

  


  let grid00 = grid[0][0];
  let win = 1;
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      if(grid[y][x]!=grid00){
        win = 0;

      }
      
    }
    
  }
  if(win === 1){
    fill(155,155,155);
    textAlign(CENTER,CENTER);
    text("win",width/2,height/2);
  }
}