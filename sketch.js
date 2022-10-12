let Bubbles = [];
let x = 0;
let x1 = 0;
let x2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  for (let i = 1; i < 35; i++) {
    Bubbles.push(new Bubble(width / 2, height / 2));
  }
}

function draw() {
  background(0, 20);
  push();
  stroke("green");
  translate(width / 2, height / 2);
  strokeWeight(5);
  line(-20, 0, 20, 0);
  line(0, -20, 0, 20);
  strokeWeight(0.5);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  pop();

  push();
  noFill();
  stroke("green");
  strokeWeight(1);
  x = x + 10;
  if (x > width) {
    x = 0;
  }
  circle(width / 2, height / 2, x);
  pop();

  push();
  noFill();
  stroke("green");
  strokeWeight(1);
  x1 = x1 + 5;
  if (x1 > width / 1.5) {
    x1 = 0;
  }
  circle(width / 2, height / 2, x1);
  pop();

  push();
  noFill();
  stroke("green");
  strokeWeight(1);
  x2 = x2 + 15;
  if (x2 > width / 0.7) {
    x2 = 0;
  }
  circle(width / 2, height / 2, x2);
  pop();

  push();
  stroke("green");
  strokeWeight(1);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.02);
  line(0, 0, 0, height);
  pop();

  for (let i = 0; i < Bubbles.length; i++) {
    Bubbles[i].move();
  }
}

class Bubble {
  constructor(xpos, ypos, radius) {
    this.x = xpos;
    this.y = ypos;
    this.r = radius;
  }

  move() {
    this.x += random(-25, 25);
    this.y += random(-25, 25);

    push();
    const randomValue = random();
    if (randomValue < 0.4) {
      const r = random(0, 255);
      const g = random(200, 255);
      const b = random(0, 255);
      fill(r, g, b);
    } else {
      fill("red");
    }
    noStroke();
    translate(this.x, this.y);
    square(0, 0, random(0, 20), random(0, 10));
    pop();
    loop();
  }
}
