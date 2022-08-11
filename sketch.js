var firstimage;
var level1,level2,level3,level4,level5;
var Boy,Boy_running;
var form,game;

function preload() {
firstimage = loadImage("./Images/FirstImage.png");
level1 = loadImage("./Images/Level-1.jpg");
//level2 = loadImage("./Images/Level-2.png");
Boy_running = loadAnimation("./Character/1.png","./Character/2.png","./Character/3.png"
,"./Character/4.png","./Character/5.png","./Character/6.png","./Character/7.png"
,"./Character/8.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Boy = createSprite(width/ 2 - 40, height/ 2 - 30);
  Boy.addAnimation(Boy_running);
}

function draw() {
  background(level1);
}