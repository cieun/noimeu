const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let lowerDogs;
function preload(){
  lowerDogs = createCapture(VIDEO);
  lowerDogs.size(64,48);
  lowerDogs.hide();
  
  dogs = createCapture(VIDEO);
  dogs.size(windowWidth, windowHeight);
  dogs.hide();
}

let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  
}

function draw() {

    //이미지부분
  image(dogs,0,0, windowWidth, windowHeight);
  
    //아스키코드 부분
  pg.background(0);
  let w = width/lowerDogs.width;
  let h = height/lowerDogs.height;
  lowerDogs.loadPixels();
  for(let i=0; i<lowerDogs.width; i++){
    for(let j=0; j<lowerDogs.height; j++){
      const pixelIndex = (i+j*lowerDogs.width)*4;
      const r = lowerDogs.pixels[pixelIndex + 0];
      const g = lowerDogs.pixels[pixelIndex + 1];
      const b = lowerDogs.pixels[pixelIndex + 2];
      
      const avg =(r+g+b)/3;
      
      
      pg.fill(255);
      //square(i*w,j*h, w);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      
      pg.textSize(w);
      pg.textAlign(CENTER, CENTER);
      pg.text(density.charAt(charIndex),i*w + w*0.5, j*h + j*0.5);
    }
  }
  
  //image(dogs,0,0,width,height);
  let tile = pg.get(mouseX,mouseY,600,600);
  image(tile,mouseX,mouseY);
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}