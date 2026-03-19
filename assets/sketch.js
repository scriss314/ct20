//For Blinking animation
let t = 0;
let blinkTimer = 0;
let blinkDuration = 20;
let blinkProgress = 0;
let blinking = false;

// music
let music;

function preload(){
  music = loadSound("assets/Main Theme- Ori and the Will of the Wisp.mp3")
}

function mousePressed(){
  if (music.isPlaying()) {
    music.pause();
  } else {
    music.loop();
  }
}

function setup() {
  createCanvas(500, 500);
}



function gradientBackground() {
  for (let y = 0; y < height; y++) {
    
    let r = map(y, 0, height, 20, 150);
    let g = map(y, 0, height, 40, 100);
    let b = map(y, 0, height, 120, 255);
    
    stroke(r, g, b);
    line(0, y, width, y);
  }
}

function draw() {
  background(15,20,40);
  gradientBackground();
  
  
  blinkTimer++;
  
  // Start blink every ~3 seconds
  if (blinkTimer > 180 && !blinking) {
    blinking = true;
    blinkProgress = 0;
    blinkTimer = 0;
  }
  
  if (blinking) {
    blinkProgress++;
    
    if (blinkProgress > blinkDuration) {
      blinking = false;
    }
  }

  drawOriFace(width/2, height/2);
  
  noStroke();
  textStyle(BOLD);
  fill(180,220, 255);
  textSize(15);
  text("Remember Those who have passed, and they will forever live on",20,40)
  
  // Music Credit 
  noStroke();
  textStyle(NORMAL);
  fill(180, 220, 255)
  textSize(20);
  text("Video Game: Ori and the Will of the Wisps", 30,380)
  text("Music Composer: Gareth Coker | Released in 2020",30,410)
  text("Music Title: Main Theme",30, 450)
  
  //Audio status text
  noStroke();
  fill(180, 220, 255);
  textSize(14);
  
  if (music.isPlaying()) {
    text("Click to Pause Music", 20, height -20);
  } else {
    text("click to Play Music", 20, height - 20)
  } 
}


function drawOriFace(x, y) {
  
  noStroke();
  
 let blink = 75;

if (blinking) {
  let phase = sin((blinkProgress / blinkDuration) * PI);
  blink = 75 - phase * 70;
}
  
  // Head glow
  fill(200, 230, 255, 40);
  ellipse(x, y, 220, 220);
  
  // Left Ear
  push();
  translate(x - 60, y - 20);
  rotate(-0.3);
  
  fill(230, 245, 255);
  beginShape();
  vertex(0, 0);
  bezierVertex(-30, -80, -20, -140, 0, -180);
  bezierVertex(20, -140, 30, -80, 0, 0);
  endShape(CLOSE);
  
  // inner ear shading
  fill(180, 210, 235, 120);
  beginShape();
  vertex(0, -20);
  bezierVertex(-15, -70, -10, -120, 0, -150);
  bezierVertex(10, -120, 15, -70, 0, -20);
  endShape(CLOSE);
  
  pop(); 
  
  
  //Right Ear
  push()
  translate(x + 60, y -10);
  rotate(0.3);
  
  fill(230, 245, 255);
  beginShape();
  vertex(0, 0);
  bezierVertex(-30, -80, -20, -140, 0, -180);
  bezierVertex(20, -140, 30, -80, 0, 0);
  endShape(CLOSE)
  
  // inner ear
  fill(180, 210, 235, 120);
  beginShape();
  vertex(0, -20);
  bezierVertex(-15, -70, -10, -120, 0, -150);
  bezierVertex(10, -120, 15, -70, 0, -20);
  endShape(CLOSE)
  pop();

  // Head base
  fill(230, 245, 255);
  ellipse(x, y, 160, 180);
  
  //Left antenna
  push();
  translate(x - 15, y- 120);
  rotate(-0.2);
  fill(230, 245, 255);
  beginShape();
  vertex(0,0);
  bezierVertex(-5, -20, -5, -40, -10, -70);
  bezierVertex(5, -40, 5, -20, 5, 50);
  endShape(CLOSE)
  pop()
  
  //Right Antenna
  push();
  translate(x + 25, y - 115);
  rotate(0.3);
  beginShape();
  vertex(0,0);
  bezierVertex(-5, -20, -5, -40, 10, -70)
  bezierVertex(5, -40, 5, -20, 10, 50);
  endShape(CLOSE)
  pop();
  
  // Left Eye
  fill(10, 20, 40);
  ellipse(x - 35, y - 10, 55, blink);
  
  // Right Eye
  ellipse(x + 35, y - 10, 55, blink);
  
  
  // Eye highlights
  fill(255);
  ellipse(x - 25, y - 25, 20, blink * 0.35);
  ellipse(x + 45, y - 25, 20, blink * 0.35);
  
  // Smaller inner glow
  fill(180, 220, 255, 120);
  ellipse(x - 35, y - 10, 30, 40);
  ellipse(x + 35, y - 10, 30, 40);
  
  // Nose
  fill(150, 190, 220);
  ellipse(x + 1, y + 25, 30, 18);
}


