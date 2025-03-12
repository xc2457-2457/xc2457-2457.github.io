// Project Title
// Your Name
// Date



let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("cs30 text","Mr.Scott",
    1234567891011,"leatherbiund",515,width*0.3);

}

function draw() {
  background(220);
  myBook.display();
}
class Book{
  constructor(title,author,isbn,cover,page,x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.page = page;
    this.x = x;


  }
  display(){
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    switch(this.cover) {
    case "softcover":
      fill(250,250,150);  break;
    case "hardcover":
      fill(120,255,255);  break;
    case "leatherbiund":
      fill(150,100,15);  break;
        
        
    }
  }

  printOut(){
    print(this.title + ",by"+ this.author);
    print("length:"+ this.page);
    print("isbn:"+ this.isbn);
  }
}