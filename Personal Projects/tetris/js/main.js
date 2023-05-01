// SET UP CANVAS AND 2D GRAPHICS CONTEXT
// CHANGE SIZE
let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 750;
cnv.height = 650;

// Object array
let blocks = [];

// Global variables
let score = 0;

// Deltatime function
window.requestAnimationFrame(update);
function update() {
  // RUN HELPER FUNCTIONS
  draw();
  collision();
  // gameOverScreen();

  // REQUEST ANIMATION FRAME
  window.requestAnimationFrame(update);
}

function draw() {
  // console.log('draw');
  // DRAW BACKROUND
  ctx.fillStyle = 'PaleTurquoise';
  ctx.fillRect(0, 0, 750, 650);

  // Draw game area
  ctx.fillStyle = 'White';
  ctx.fillRect(180, 30, 390, 585);

  // Draw boxes
  for (let i = 180; i < 565; i += 39) {
    for (let j = 30; j < 585; j += 39) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.strokeRect(i, j, 40, 40);
    }
  }

  // Draw Outline
  ctx.strokeStyle = 'steelblue';
  ctx.lineWidth = 10;
  ctx.strokeRect(174, 24, 403, 598);

  // ctx.strokeStyle = 'steelblue';
  // ctx.lineWidth = 5;
  // ctx.strokeRect(8, 28, 154, 129);

  // Draw Hold Box
  ctx.fillStyle = 'steelblue';
  ctx.fillRect(10, 30, 150, 125);

  // Draw Hold Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('HOLD', 45, 55);

  // Draw Hold Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(20, 60, 130, 85);
  ctx.strokeRect(20, 60, 130, 85);

  // ctx.font = '40px Monospace';
  // ctx.fillStyle = 'black';
  // ctx.fillText(score, 45, 640);

  // DRAW ALL SNAKE PARTS
  // blocks.forEach(drawBlocks);

  // DRAW BANANA
  // ctx.drawImage(htmlImg2, banana.x, banana.y, 40, 40);
}

function collision() {
  // console.log('update');
}

// TO DO
// Add gui elements
