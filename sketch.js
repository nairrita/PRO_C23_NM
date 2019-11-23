
var bubble1,bubble2;
var d;

function setup(){
  createCanvas(400,400);
  bubble1 = new Bubble(200,200);
 bubble2 = new Bubble(100,200);

}

function draw(){

  background(0);

  bubble1.move();
  bubble1.display();
  bubble2.move();
  bubble2.display();

d= dist(bubble1.x,bubble1.y,bubble2.x,bubble2.y)

  if(d<bubble1.r+bubble2.r){
    bubble1.changeColor();
    bubble2.changeColor();
  }

}