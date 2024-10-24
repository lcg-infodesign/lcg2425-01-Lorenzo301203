function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Serve per disegnare una sola volta, rimuovi se vuoi disegnare continuamente
  noStroke();
  fill(150, 80, 60, 150); // Colore marrone semitrasparente
}

function draw() {
  background(255);
  let squareSize = 50; // Dimensione dei quadrati
  let columns = Math.floor(width / squareSize);
  let rows = Math.floor(height / squareSize);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareSize + random(-10, 10);
      let y = j * squareSize + random(-10, 10);
      rect(x, y, squareSize, squareSize);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
