// SET UP CANVAS AND 2D GRAPHICS CONTEXT
// CHANGE SIZE
let cnv = document.querySelector("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// SEQUENCE ARRAY
let sequence = [];

// GLOBAL VARIABLES
var mouseX = null;
var mouseY = null;
var boundingRect = cnv.getBoundingClientRect();
var score = 0;
var blue = false;
var yellow = false;
var red = false;
var green = false;
var interval = 625;
var interval2 = 250;
var promise = Promise.resolve();
var tempvar = true;
var isFlashing = false;
var counter = -1;

window.requestAnimationFrame(update);
function update() {
  // HELPER FUNCTION
  draw();

  // console.log("x" + mouseX);
  // console.log("y" + mouseY);
  // console.log(interval);
  console.log(isFlashing);

  // REQUEST ANIMATION FRAME
  window.requestAnimationFrame(update);
}

function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  if (blue == false) {
    ctx.fillStyle = "dodgerblue";
    ctx.fillRect(100, 50, 200, 200);
  }

  if (blue == true) {
    ctx.fillStyle = "mediumblue";
    ctx.fillRect(100, 50, 200, 200);
    setTimeout(function clearBlue() {
      blue = false;
    }, interval2);
  }

  if (yellow == false) {
    ctx.fillStyle = "gold";
    ctx.fillRect(500, 50, 200, 200);
  }

  if (yellow == true) {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(500, 50, 200, 200);
    setTimeout(function clearYellow() {
      yellow = false;
    }, interval2);
  }

  if (red == false) {
    ctx.fillStyle = "red";
    ctx.fillRect(100, 350, 200, 200);
  }

  if (red == true) {
    ctx.fillStyle = "darkred";
    ctx.fillRect(100, 350, 200, 200);
    setTimeout(function clearRed() {
      red = false;
    }, interval2);
  }
  if (green == false) {
    ctx.fillStyle = "forestgreen";
    ctx.fillRect(500, 350, 200, 200);
  }

  if (green == true) {
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(500, 350, 200, 200);
    setTimeout(function clearGreen() {
      green = false;
    }, interval2);
  }

  ctx.font = "40px Monospace";
  ctx.fillStyle = "black";
  ctx.fillText(score, 385, 585);
}

// GET MOUSE POSITION
document.querySelector("canvas").addEventListener("mouseup", getXYPosition);
function getXYPosition(event) {
  if (isFlashing == false) {
    mouseX = event.clientX - boundingRect.left;
    mouseY = event.clientY - boundingRect.top;
    logic();
    console.log("click");
  }
}

function logic() {
  // DETERMINE COLOR CLICKED
  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 50 && mouseY <= 250) {
    // console.log("blue");
  } else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 50 && mouseY <= 250) {
    // console.log("yellow");
  } else if (mouseX >= 100 && mouseX <= 300 && mouseY >= 350 && mouseY <= 550) {
    // console.log("red");
  } else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 350 && mouseY <= 550) {
    // console.log("green");
  }

  // // UPDATE SCORE
  // if(counter == sequence.length - 1) {
  //   counter = -1
  // score = sequence.length;
  // startSequence()
  // }

  // RESET MOUSE X+Y
  mouseX = null;
  mouseY = null;

  // CHECK THAT ANSWERS ARE CORRECT
  // sequence.forEach(function () {
  //   promise = promise.then(function () {
  //     if ()
  //     return new Promise(function (resolve) {
  //       setTimeout(resolve, interval);
  //     });
  //   });
  // });
}

function startSequence() {
  addColor();
  isFlashing = true;
}

function addColor() {
  let ranNum = Math.random();
  // PICK RANDOM COLOR
  if (ranNum < 0.25) {
    sequence.push("blue");
  } else if (ranNum > 0.75) {
    sequence.push("yellow");
  } else if (ranNum >= 0.25 && ranNum < 0.5) {
    sequence.push("red");
  } else {
    sequence.push("green");
  }

  sequence.forEach(function (element, index) {
    promise = promise.then(function () {
      if (element == "blue") {
        blue = true;
        // console.log("b");
      } else if (element == "yellow") {
        yellow = true;
        // console.log("y");
      } else if (element == "red") {
        red = true;
        // console.log("r");
      } else if (element == "green") {
        green = true;
        // console.log("g");
      }
      // CHECK IF IT'S THE LAST ITEM IN ARRAY
      if (index == sequence.length - 1) {
        setTimeout(function changeVariable() {
          isFlashing = false;
        }, 500);
      }
      return new Promise(function (resolve) {
        setTimeout(resolve, interval);
      });
    });
  });
}
