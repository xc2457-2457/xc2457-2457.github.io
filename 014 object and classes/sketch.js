// random walkers
// Xinchen
// Mar.14
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let singleWalker;
let walkers = [];
const  NUM_WALKER = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100,150,"green");
  initWalkers();
  
}

function initWalkers(){
  for(let i = 0;i < NUM_WALKER; i ++){
    let c = color(random(255),random(255),random(255));
    let w = new Walker(random(width),random(height),random(width),c);
  }
}

function draw() {
  background(220);
  for(let currentwalker of walkers){
    currentwalker.move();
    currentwalker.display();

  }
  

}

class Walker{
  constructor(x,y,c){
    this.x = x; this.y = y; this.c = c;
    this.speed = random=(2,10);
    this.size = 5;

  }
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);
  }

  move(){
    let choice = floor(random(4));
    switch(choice){
      case 0:
        this.x -= this.speed;  break;
      case 1:
        this.x += this.speed;  break;
      case 2:
        this.x -= this.speed;  break;
      case 3:
        this.x += this.speed;  break;

    }
  }
}
