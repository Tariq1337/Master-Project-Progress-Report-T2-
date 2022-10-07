var img;

function setup() {
  createCanvas(300, 500);
  img = loadImage('https://upcdn.io/W142hJk/raw/demo/2oZyLY4.jpg');
}

function draw() {
  // pick a game box
  image(img, 0, 0);
  fill('#A8DDFC');
  rect(10, 20, 280, 65, 10)
  
  // pick a game text
  textSize(32);
  fill(50);
  text("Pick a Game!", 58, 65);
  
  // trace the line box
  fill('#218EB8');
  rect(10, 120, 280, 105, 10);
  
  // trace the line text
  textSize(25);
  fill(50);
  text("Trace the lines", 65, 155);
  
  textSize(16);
  fill(50);
  text("Trace the lines shown on screen", 40, 178);
  
  textSize(16);
  fill(50);
  text("with your finger. Be as accurate", 40, 198);
  
  textSize(16);
  fill(50);
  text("as possible!", 103, 216);
  
  // Trace the shape box
  fill('#6BD466');
  rect(10, 250, 280, 105, 10);

  // trace the shape text 
  textSize(25);
  fill(50);
  text("Trace the shapes", 55, 275);
  
  textSize(16);
  fill(50);
  text("Trace the shapes shown on screen", 15, 300);
  
  textSize(16);
  fill(50);
  text("with your finger. Be as accurate", 25, 320);

  textSize(16);
  fill(50);
  text("as possible!", 100, 340);
  
  
  // resize and move the shape box
  fill('#0AAAD5');
  rect(10, 380, 280, 105, 10);
  
  // resize and move text
  textSize(25);
  fill(50);
  text("Trace the shapes", 52, 405);
  
  textSize(16);
  fill(50);
  text("Resize the shape using your fingers ", 20, 425);
  text("by either pinching or expanding and", 20, 445);
  text("match it to the designated space!", 25, 465);


}
