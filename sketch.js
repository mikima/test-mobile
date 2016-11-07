function setup() {
  createCanvas(1080, 1920)
}

function draw() {
  //fill(255,0,0);
  noFill();
  //rect(mouseX,mouseY,-15,-15);
  if(touchIsDown){
    //ellipse(random(0,500),random(0,500),10,10);
    console.log(touches);
    for(var i=0; i<touches.length; i++) {

    	ellipse(touches[i].x,touches[i].y,20);
    }
  }
}