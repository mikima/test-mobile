function setup() {
  createCanvas(500,500)
}

function draw() {
  //fill(255,0,0);
  noFill();
  //rect(mouseX,mouseY,-15,-15);
  if(touchIsDown){
    ellipse(random(0,500),random(0,500),10,10);
  }
}