// SET UP CANVAS AND 2D GRAPHICS CONTEXT
// CHANGE SIZE
let cnv = document.querySelector('canvas');
let ctx = cnv.getContext('2d');
cnv.width = 680;
cnv.height = 650;

// Object array
let blocks = [];

// Deltatime function
window.requestAnimationFrame(update);
function update() {
  // RUN HELPER FUNCTIONS
  draw();
  collision();
  gameOverScreen();

  // REQUEST ANIMATION FRAME
  window.requestAnimationFrame(update);
}

function draw() {
  console.log('draw');
}

function update() {
  console.log('update');
}

// TO DO
// Add gui elem
