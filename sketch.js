var canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(110, 250);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function take_snapshot(){
  save('student_name.png');
  }