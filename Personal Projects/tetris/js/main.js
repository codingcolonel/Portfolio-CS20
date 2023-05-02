// SET UP CANVAS AND 2D GRAPHICS CONTEXT
// CHANGE SIZE
let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 660;
cnv.height = 650;

// Object array
let blocks = [];

// Global variables
let score = 0;
let level = 0;
let lines = 0;

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
  ctx.fillRect(180, 30, 300, 600);

  // Draw boxes
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  for (let i = 180; i < 470; i += 30) {
    for (let j = 30; j <= 600; j += 30) {
      ctx.strokeRect(i, j, 30, 30);
    }
  }

  // Draw Outline
  ctx.strokeStyle = 'darkcyan';
  ctx.lineWidth = 10;
  ctx.strokeRect(174, 24, 312, 612);

  // Draw Hold Box
  ctx.fillStyle = 'darkcyan';
  ctx.fillRect(10, 20, 150, 125);

  // Draw Hold Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';

  ctx.fillText('HOLD', 85, 45);

  // Draw Hold Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(20, 50, 130, 85);

  // Draw Next Box
  ctx.fillStyle = 'darkcyan';
  ctx.fillRect(500, 20, 150, 375);

  // Draw Next Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('NEXT', 575, 45);

  // Draw Next Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(510, 50, 130, 335);

  // Draw Scoreboard Box
  ctx.fillStyle = 'darkcyan';
  ctx.fillRect(10, 392, 150, 249);

  // Draw Score Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('SCORE', 85, 443);

  // Draw Score Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(20, 448, 130, 25);

  // Draw Score Number
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(score, 85, 470);

  // Draw Level Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('LEVEL', 85, 513);

  // Draw Level Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(20, 518, 130, 25);

  // Draw Level Number
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText(level, 85, 540);

  // Draw Lines Text
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('LINES', 85, 583);

  // Draw Lines Inner Box
  ctx.fillStyle = '#eafbfb';
  ctx.fillRect(20, 587, 130, 25);

  // Draw Lines Number
  ctx.font = '25px Verdana, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText(lines, 85, 610);

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
