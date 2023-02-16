var blackBackground
var bridge
var enemy
var ally

function preload(){
  var blackBackground = loadImage("Black background 1.jpeg")
  var bridge = loadImage("brige.jpeg")
  var enemy = loadImage("Enemy 2.jpeg")
   ally = loadImage("your fighter 2.png")
}

function setup() {
  createCanvas(1520, 750);
  fighter = createSprite(100,700,50,50)
  fighter.addImage(ally)
}

function draw() {
  background("black");
  drawSprites()

}
