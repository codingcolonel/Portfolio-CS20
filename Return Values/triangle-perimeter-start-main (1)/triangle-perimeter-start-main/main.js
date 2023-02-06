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

  // Store side lengths
  let abSide = dist(xa, ya, xb, yb);
  let acSide = dist(xa, ya, xc, yc);
  let bcSide = dist(xb, yb, xc, yc);

  // Output side lengths and perimeter
  document.getElementById('abSide').innerHTML = abSide;

  document.getElementById('acSide').innerHTML = acSide;

  document.getElementById('bcSide').innerHTML = bcSide;

  document.getElementById('abcPerimeter').innerHTML = abSide + acSide + bcSide;
}

function dist(x1, y1, x2, y2) {
  //Calculate sides
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
