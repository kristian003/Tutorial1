var circleX = 0;

function setup() {
  createCanvas(800,800);
 
 
}

function draw() {
  
  background (200);
  noStroke();
  fill (52,24,255);
  ellipse (mouseX,mouseY,75,75);

  
  fill (255,255,50);
  rect (150,50,75,75);
  circleX = circleX + 1;
}
