// planets and moons
// Xinchen Yao
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2,height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){

  if(keyIsPressed && keyCode=== SHIFT){
    myPlanet= new Planet(mouseX,mouseY);
  }
  else{
    myPlanet.createmoon();

  }
  
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX,mouseY);
  }
}
class Planet{
  //1 cons
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];

  }
  //2. class functions
  display(){
    circle(this.x,this.y,this.s);

    for(let m of this.moons){
      m.update();
    }

  }

  relocate(){
    
  }

  createmoon(){
    this.moons.push(new Moon(this.x,this.y));
  }
}

class Moon{
  constructor(x,y){
    this.x = x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitradius = 80; this.s = 25;

  }
  update(){
    this.move();
    this.display();
  }
  move(){
    this.angle += this.speed;

  }

  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    circle(this.orbitradius,0,this.s);



    pop();

  }
}