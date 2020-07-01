let time = 0;
let wave = [];

let circles;


function setup() {
  createCanvas(1800, 950);
  circles = createSlider(1, 100, 3);

  timer2  = createSlider(1, 5, 3);

}

function draw() {
  background(150);
  textSize(32);
  fill(0)
  stroke(0);
  text('circles', 10, 910);
  text('speed', 10, 450);
  textSize(22);
  text('0', 125, 910);
  text('100', 1750, 910);

  circles.position(150, 900);
  circles.style('width', '1600px');
  timer2.position(130, 440);

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

    stroke(color(0, 0, 255));
    noFill();
    ellipse(prevx, prevy, radius * 2);

    fill(255,0,153);
    stroke(255  );
    line(prevx, prevy, x, y);
    ellipse(x, y, 10);
  }
  wave.unshift(y);
  stroke(255,0,153);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    stroke(255,0,153);
    vertex(i, wave[i]);

  }
  endShape();

  time += 0.01 * timer2.value();

  if (wave.length > 1150) {
    wave.pop();
  }
}
