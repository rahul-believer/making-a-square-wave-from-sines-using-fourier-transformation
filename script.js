let time = 0;
let wave = [];

let circles;


function setup() {
  createCanvas(1900, 1000);
  circles = createSlider(1, 5, 1);
}

function draw() {
  background(0);
  textSize(32);
  text('circles', 10, 910);
  circles.position(130, 900);

  translate(350, 200);


  let x = 0;
  let y = 0;

  for (let i = 0; i < circles.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    let radius = 150 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x, y, 8);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if (wave.length > 750) {
    wave.pop();
  }
}
