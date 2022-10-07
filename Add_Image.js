let img;

function setup() {
  createCanvas(300, 500);
  img = loadImage('https://upcdn.io/W142hJk/raw/demo/2oZyLY4.jpg');
}

function draw() {
  image(img, 0, 0);
}