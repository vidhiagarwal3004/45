var bg,bg2,form,system,code,security;
var score=0;
var access1,access2,access3;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  text("SCORE : " + score ,20,20);
  // Add code to display score in the middle of the screen
   if(score === 3)
   {
     clear()
     background(bg2);
     fill("black");
     textSize(40);
     text("TRASURE UNLOCKED", 250,200);


   }

  // Add code to display the end screen


  drawSprites()
}