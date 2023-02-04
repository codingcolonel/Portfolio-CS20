// Triangle Perimeter Assignment Start Code
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get (X.Y) coordinates for all vertexs
  let xa = document.getElementById('vertexXA').value;
  let ya = document.getElementById('vertexYA').value;
  let xb = document.getElementById('vertexXB').value;
  let yb = document.getElementById('vertexYB').value;
  let xc = document.getElementById('vertexXC').value;
  let yc = document.getElementById('vertexYC').value;

  // Output side lengths and perimeter
  document.getElementById('abSide').innerHTML = dist(xa, ya, xb, yb);

  document.getElementById('acSide').innerHTML = dist(xa, ya, xc, yc);

  document.getElementById('bcSide').innerHTML = dist(xa, ya, xc, yc);

  document.getElementById('abcPerimeter').innerHTML =
    dist(xa, ya, xb, yb) + dist(xa, ya, xc, yc) + dist(xa, ya, xc, yc);
}

function dist(x1, y1, x2, y2) {
  //Calculate sides
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
