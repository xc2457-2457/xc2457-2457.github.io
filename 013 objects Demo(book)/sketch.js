// Project Title
// Your Name
// Date



let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let x = 50;
  for(let i = 0; i < 20; i++){
    bookshelf.push(new Book("A", "Mr. Booth",11111111,cover[choice], 200,x));
    x += 20;
  }
  myBook = new Book("cs30 text", "Mr.Scott",
    1234567891011, "leatherbiund", 515, width * 0.3);

}

function draw() {
  background(220);
  myBook.display();
}
class Book {
  constructor(title, author, isbn, cover, page, x) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.page = page;
    this.x = x;


  }
  display() {
    rectMode(CENTER); textAlign(CENTER, CENTER);
    textSize(20);

    switch (this.cover) {
      case "softcover":
        fill(250, 250, 150); break;
      case "hardcover":
        fill(120, 255, 255); break;
      case "leatherbiund":
        fill(150, 100, 15); break;



    }
    rect(this.x, height / 2, this.page / 10, 150);
    fill()
  }

  printOut() {
    print(this.title + ",by" + this.author);
    print("length:" + this.page);
    print("isbn:" + this.isbn);
  }
}