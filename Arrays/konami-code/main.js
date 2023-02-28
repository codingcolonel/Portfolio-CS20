let keys = [];

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
  let code = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];
  keys.push(e.key);

  if (keys.length > 10) {
    keys.splice(0, 1);
  }

  console.log(e.key);

  if (JSON.stringify(keys) === JSON.stringify(code)) {
    alert('hooray!');
  }
}
