/*/! faction.js v1.0April 24, 2021 */
function keyCodeTeller(x_axis, y_axis){                      /* to define x and y*/
    text("keyPressed: "+key, x_axis, y_axis-15); 
    text("keyCode: "+keyCode, x_axis, y_axis+10);
    if(keyCode === 16){
        text("shiftKey: true", x_axis, y_axis+35);  
    }
    else{
        text("shiftKey: false", x_axis, y_axis+35);
    }
    if(keyCode === 18){
        text("shiftKey: true", x_axis, y_axis+60);
    }
    else{
        text("altKey: false", x_axis, y_axis+60);
    }
    if(keyCode === 17){
        text("ctrltKey: true", x_axis, y_axis+85);
    }
    else{
        text("ctrltKey: false", x_axis, y_axis+85);
    }
    if(keyCode === 91){
        text("metaKey: true", x_axis, y_axis+110);
    }
    else{
        text("metaKey: false", x_axis, y_axis+110);
    }
}
 
function coords(colorR, colorG, colorB){
    strokeWeight(1);
    stroke(rgb(colorR, colorG, colorB));
    textSize(15);
    noFill();
    text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY+40);
    if(mouseY>649){
        text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY);
    }
    else if(mouseX>1380){
        text("X: "+mouseX+", Y: "+mouseY, mouseX-80, mouseY+40);
    }
}

function mouseHot(x, y, sizeX, sizeY, r, b){
    // Scale the mouseX value from 0 to 720 to a range between 0 and 175
    let c = map(mouseX, 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    let d = map(mouseX, 0, width, sizeX, sizeY);
    fill(r, c, b);
    ellipse(x, y, d, d);
}

function pressHighlight(){
    stroke(255);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function mouseEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
}

function stars(color){
    let totalPts = 300;
    let steps = totalPts + 1;
    stroke(color);
    frameRate(1);    
    let rand = 0;
    for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-5, 5);
  }
}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;
  
    this.update = function(mx, my) {
      this.angle = atan2(my - this.y, mx - this.x);
    };
  
    this.display = function() {
      push();
      translate(this.x, this.y);
      fill(255);
      ellipse(0, 0, this.size, this.size);
      rotate(this.angle);
      fill(153, 204, 0);
      ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
      pop();
    }
}

function discoEllipse(x_axis, y_axis, width, height){
    let r, g, b;
    r = random(255);
    g = random(255);
    b = random(255);
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(x_axis, y_axis, width, height);
}

function fuseTube(x_axis, y_axis, width, height, speed){
    let r, g, b;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    frameRate(speed);
    var rect = createSprite(x_axis, y_axis, width, height);
    rect.shapeColor = r, g, b;
    drawSprites();
}

function fuseBulb(x_axis, y_axis, width, height, speed){
    let r, g, b;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    frameRate(speed);
    strokeWeight(2);
    stroke(random(0,255));
    fill(random(0,255));
    ellipse(x_axis, y_axis, width, height);
}

function discoTriangle(x1, y1, x2, y2, x3, y3, speed){
    let r, g, b;
    r = random(255);
    g = random(255);
    b = random(255);
    frameRate(speed);
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    triangle(x1, y1, x2, y2, x3, y3);
}

function tennisBackground(){
  noFill();
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);
  stroke(0, 153, 255);
  line(0, height * 0.33, width, height * 0.33);
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
}

function mouseEffect(ri, b1, g1, rii, b2, g2){
    noStroke();
    rectMode(CENTER);
  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(ri, b1, g1);
//   fill(237, 34, 93, r1);
  rect(width / 2 + r1 / 2, height / 2, r1, r1);

  fill(rii, b2, g2);
//   fill(237, 34, 93, r2);
  rect(width / 2 - r2 / 2, height / 2, r2, r2);
}

function tickle(){
    let message = 'tickle',font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y;
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}

function piano(){
    let rectWidth;
    noStroke();
    rectWidth = width / 4;
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
      keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    if (keyIndex === -1) {
      // If it's not a letter key, clear the screen
      background(230);
    } else {
      // It's a letter key, fill a rectangle
      randFill_r = Math.floor(Math.random() * 255 + 1);
      randFill_g = Math.floor(Math.random() * 255 + 1);
      randFill_b = Math.floor(Math.random() * 255 + 1);
      fill(randFill_r, randFill_g, randFill_b);
      let x = map(keyIndex, 0, 25, 0, width - rectWidth);
      rect(x, 0, rectWidth, height);
    }
}

