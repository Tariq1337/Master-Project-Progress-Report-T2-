//global vars
var screenNum;
var gameNum;
var playButton;
var gameButton1;
var gameButton2;
var gameButton3;
var tryAgainButton;
var homeButton;
var tempButton;

//initializes some buttons and displays first screen
function setup() {
  createCanvas(300, 500);
  
  //temp button for game screen
  tempButton = createButton('temp');
  tempButton.position(150,400);
  tempButton.mousePressed(drawResultScreen);
  
  //button to try again on result screen
  tryAgainButton = createButton('Try Again?');
  tryAgainButton.position(73,290);
  tryAgainButton.style('background-color','#A8FCD7');
  tryAgainButton.style('font-size', '25px');
  tryAgainButton.style('color', '50');
  tryAgainButton.size(150,65);
  
  //button to go home on result screen
  homeButton = createButton('Home');
  homeButton.position(73,380);
  homeButton.mousePressed(drawHome);
  homeButton.style('background-color','#A8FCFC');
  homeButton.style('font-size', '25px');
  homeButton.style('color', '50');
  homeButton.size(150,65);
  
  drawHome();
}

//first screen
function drawHome() {
  screenNum = 1;
  //boxes and text
  background('#FFE2F8');
  fill('#A8DDFC');
  rect(26, 25, 245, 85, 20);
  textSize(36);
  fill(50);
  text('Welcome!', 70, 70);
  textSize(16);
  fill(50);
  text('Let\'s get started!', 95, 95);
  
  //play button
  playButton = createButton('Play');
  playButton.position(26,200);
  playButton.style('background-color','#A8FCD7');
  playButton.style('font-size', '60px');
  playButton.style('color', '50');
  playButton.size(245,200);
  playButton.mousePressed(drawPickGame);
  
  //hides the other buttons
  tryAgainButton.hide();
  homeButton.hide();
  tempButton.hide();
}

function drawPickGame(){
  // pick a game box
  playButton.hide();
  background('#FFE2F8');
  fill('#A8DDFC');
  rect(10, 20, 280, 65, 10)
  
  // pick a game text
  textSize(32);
  fill(50);
  text("Pick a Game!", 58, 65);
  
  // trace the line box
  fill('#FEFFE1');
  rect(10, 100, 280, 105, 0, 0, 10, 10);
  textSize(16);
  fill(0);
  text("Trace the lines shown on screen", 35, 178);
  textSize(16);
  fill(0);
  text("as accurately as possible.", 60, 198);
  
  // Trace the shape box
  fill('#DDFFD4');
  rect(10, 230, 280, 105, 0, 0, 10, 10);
  textSize(16);
  fill(0);
  text("Trace the shapes shown on screen", 25, 308);
  textSize(16);
  fill(0);
  text("as accurately as possible.", 60, 328);

  //resize and move the shape box
  fill('#FFE4E4');
  rect(10, 360, 280, 105, 0, 0, 10, 10);
  textSize(16);
  fill(0);
  text("Resize the shape using your fingers ", 22, 438);
  text("and match it to the space shown.", 35, 458);
  
  //creates button for the first game
  gameButton1 = createButton('Trace the Line ');
  gameButton1.position(10,100);
  gameButton1.mousePressed(drawGame1);
  gameButton1.style('background-color','#FAFF69');
  gameButton1.style('font-size', '25px');
  gameButton1.style('color', '50');
  gameButton1.size(280,60);
  
  //creates button for the second game
  gameButton2 = createButton('Trace the Shape');
  gameButton2.position(10,230);
  gameButton2.mousePressed(drawGame2);
  gameButton2.style('background-color','#A5FF8E');
  gameButton2.style('font-size', '25px');
  gameButton2.style('color', '50');
  gameButton2.size(280,60);
  
  //creates button for the third game
  gameButton3 = createButton('Resize and Match');
  gameButton3.position(10,360);
  gameButton3.mousePressed(drawGame3);
  gameButton3.style('background-color','#FF6666');
  gameButton3.style('font-size', '25px');
  gameButton3.style('color', '50');
  gameButton3.size(280,60);
  
  //hides the other buttons
  tryAgainButton.hide();
  homeButton.hide();
  tempButton.hide();

}

//draws the first game (when we finish it)
function drawGame1(){
  //tracks that it is the first game and hides other buttons, creates shapes and text
  gameNum = 1;
  gameButton1.hide();
  gameButton2.hide();
  gameButton3.hide();
  background(220);
  fill('#A8DDFC');
  rect(0, 0, 1200, 110);
  textSize(30)
  fill(50);
  text('Trace the Line', 55, 65);
  
  //hides the other buttons and shows the temp one
  tryAgainButton.hide();
  homeButton.hide();
  tempButton.show();
}

//draws the second game (when we finish it)
function drawGame2(){
  //tracks that it is the second game and hides other buttons, creates shapes and text
  gameNum = 2;
  gameButton1.hide();
  gameButton2.hide();
  gameButton3.hide();
  background(220);
  fill('#A8DDFC');
  rect(0, 0, 1200, 110);
  textSize(30)
  fill(50);
  text('Trace the Shape', 42, 65);
  
  //hides the other buttons and shows the temp one
  tryAgainButton.hide();
  homeButton.hide();
  tempButton.show();
}

//draws the third game (when we finish it)
function drawGame3(){
  //tracks that it is the third game and hides other buttons, creates shapes and text
  gameNum = 3;
  gameButton1.hide();
  gameButton2.hide();
  gameButton3.hide();
  background(220);
  fill('#A8DDFC');
  rect(0, 0, 1200, 110);
  textSize(30)
  fill(50);
  text('Resize and Match', 32, 65);
  
  //hides the other buttons and shows the temp one
  tryAgainButton.hide();
  homeButton.hide();
  tempButton.show();
}

//draws the result screen
function drawResultScreen(){
  //hides the temp button and shows the others, draws shapes and text
  tempButton.hide();
  tryAgainButton.show();
  homeButton.show();
  screenNum = 2;
  background('#FFE2F8');
  fill('#FFFFE0');
  rect(10, 20, 280, 75, 10);
  fill('#A8DDFC');
  rect(10,110, 280, 150, 10);
  
  textSize(32);
  fill(50);
  text('Results', 95, 65);
  
  textSize(24);
  fill(50);
  text('Results', 25, 150);
  textSize(24);
  fill(50);
  text('Go', 25, 190);
  textSize(24);
  fill(50);
  text('Here', 25, 230);
  
  //checks what game the user came from and sends them back to it when they press the try again button
  if (gameNum == 1){
    tryAgainButton.mousePressed(drawGame1);
  } else if (gameNum == 2){
    tryAgainButton.mousePressed(drawGame2);
  } else if (gameNum == 3){
    tryAgainButton.mousePressed(drawGame3);
  }
}
