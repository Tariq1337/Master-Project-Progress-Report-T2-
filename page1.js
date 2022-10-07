var img;
function setup() {
  createCanvas(300, 500);
  img = loadImage('https://upcdn.io/W142hJk/raw/demo/2oZyLY4.jpg');
}

function draw() {
  image(img, 0, 0);
  fill('#A8DDFC');
  rect(26, 25, 245, 85, 20);
  fill('#A8FCD7')
  rect(26, 200, 245, 200, 20);
  
  textSize(36);
  fill(50);
  text('Welcome!', 70, 70);
  
  textSize(16);
  fill(50);
  text('Let\'s get started!', 95, 95);
  
  textSize(52);
  fill(50);
  text('Play', 100, 315);
}
