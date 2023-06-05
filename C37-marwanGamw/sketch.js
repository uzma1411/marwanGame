var canvas;
var backgroundImage, bgImg, p1, p2, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, player, player2;
var fSplayers = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  p1 = loadImage("../assets/p1.png");
  p2 = loadImage("../assets/p2.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
