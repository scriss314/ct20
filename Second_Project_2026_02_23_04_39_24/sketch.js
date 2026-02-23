let albumImg; // To store the album cover image
let t = 0; // Time variable to used to animate color shifting and noise

function preload(){
  albumImg = loadImage("assets/album.png");
}

function setup(){
  let canvas = createCanvas(500, 500);
  canvas.parent("sketch-holder");
  noSmooth();
  textFont("monospace"); // to give a sci-fi feel
}

function draw(){
  background(10);
  
  //makes the animated color values and slowly shift the color
  let r = 200 + 55 * sin(t * 0.5)
  let g = 150 + 80 * sin(t * 0.7)
  let b = 255;
  
  // Tint the image with the animated color values
  tint(r, g, b);
  image(albumImg, 0, 0, width, height);
  noTint();

  // Allows it to draw a VHS-style scanlines across the screen
  stroke(0, 40);
  for (let y =0; y < height; y += 4){
    line(0,y,width,y);
  }
  if (random() < 0.05){
    let h = random(5,25);
    let y = random(height);
    copy(albumImg, 0, y, albumImg.width, h, 0, y, width, h)
  }
  // To make a fake HUD text for the iamge 
  noStroke();
  fill(180,220, 255);
  textSize(14);
  text("TRANSIMSSION RECIVED", 10, 20);
  text("ORIGIN: UNKNOWN SYSTEM", 10, 40);
  text("SIGNAL STABILITY: " + floor(60 + 40 * noise(t)), 10, 60);
  text("Welcome to the future!", 160, 200)
  
  let seconds = floor(millis() / 1000);
  text("PLAY > 00:" + nf(seconds, 2),width - 140, height -10)
  t += 0.01;
}