//initialize x and y position in matrix
let textYpos = 200;
let textXpos = 0;
//initailize movement speed
let dropSpeed = 5;
//spacing in between lines of numbers
let xSpacing = 15;
let ySpacing = 10;
//An array of random numbers for Y positions
let yInitialPos = [];
//An array of random numbers for the length of number line
let numberLength = [];
//X position for each text
let textXposInLine = 0;
//Y position for each text
let textYposInLine = 0;
//Timer
let timeCounter = 0;
//Gaps between each line
let lineGaps = [];

let topLayer;
let slider;
let img;

function preload() {
  img = loadImage('../img/book450x600.jpeg');
  img.size(800,900);
}

function setup() {
    var myCanvas = createCanvas(800,900);
    myCanvas.parent("p5jscanvas");
  randomizer();

  topLayer = createGraphics(width, height);

  
  topLayer.image(img, 0, 0, 800,900);
  
  //topLayer.strokeWeight(30);
  
        
  topLayer.blendMode(REMOVE);
  
}

function draw() {
  
  background(0);
  frameRate(50);
  //run the timer
  timeCounter ++;
  //call main function
  movingNumberMatrix();
  
  
  
  if(mouseIsPressed){
    
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    topLayer.fill(random(255));
  topLayer.noStroke();
  topLayer.rect(mouseX, mouseY, random(120));
  topLayer.rectMode(CENTER);
    
  }
  
  image(topLayer, 0, 0);
}

//매트릭스 효과 
function randomizer() {
  //Randomize three arrays 
  for (let a = 0; a < 100;  a++) {
  //Generate a array of ramdom numbers to be the length of number lines
  numberLength[a] = int(random(2, 20));
  //Generate a array of ramdom numbers to be the initial Y postions of the matrix 
  yInitialPos[a] = int(random(-50, 50));
  //Generate a array of ramdom numbers to be gaps length between each falling lines on Y axis
  lineGaps[a] = int(random(2, 8));
 }
}

function generateNumberMatrix() {
  textSize(15);
  fill(color(255));
  //For loop on x axis
  for (let xRepCounter = 0; xRepCounter < 50;  xRepCounter++) {
    //For loop on Y axis
    for(let yRepCounter = 0; yRepCounter < numberLength[xRepCounter]; yRepCounter ++) {
      // X positons 
      textXposInLine = textXpos + xRepCounter * xSpacing;
      // For loop for each falling number line
      //NOTE: change number 30 to higher or a inifinte number ('Timecounter') will cuase your computer overheated!!!!!!!!
      for (let lineRepCounter = 0; lineRepCounter < 30; lineRepCounter ++) {
        // Y positons 
        textYposInLine = textYpos + yInitialPos[xRepCounter] + yRepCounter * ySpacing - lineRepCounter * numberLength[xRepCounter] * (ySpacing + lineGaps[xRepCounter]);
        //Write numbers
        text(int(random(0, 10)), textXposInLine, textYposInLine);
      }
    }
  }
}


function movingNumberMatrix() {
  //Make the matrix move
  textYpos += dropSpeed;
  generateNumberMatrix();
}
