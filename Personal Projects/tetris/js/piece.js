// Object array
let blocks = [];

function randomBlock() {
  let ranNum = randomInt(1, 8);
  if (ranNum === 1) {
    // I-block
    newBlockObject(0, 0, 'i', 'cyan', 1);
  } else if (ranNum === 2) {
    // J-block
    newBlockObject(0, 0, 'j', 'blue', 1);
  } else if (ranNum === 3) {
    // L-block
    newBlockObject(0, 0, 'l', 'orange', 1);
  } else if (ranNum === 4) {
    // O-block
    newBlockObject(0, 0, 'o', 'yellow', 1);
  } else if (ranNum === 5) {
    // S-block
    newBlockObject(0, 0, 's', 'green', 1);
  } else if (ranNum === 6) {
    // Z-block
    newBlockObject(0, 0, 'z', 'red', 1);
  } else if (ranNum === 3) {
    // L-block
    newBlockObject(0, 0, 't', 'purple', 1);
  }
}

function newBlockObject(x, y, type, color, position) {
  blocks.push({
    x: x,
    y: y,
    type: type,
    color: color,
    position: position,
  });
}
