// JavaScript for Conway's Game of Life
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const resolution = 10;
const cols = canvas.width / resolution;
const rows = canvas.height / resolution;

let grid = buildGrid();

canvas.addEventListener('click', event => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const col = Math.floor(x / resolution);
  const row = Math.floor(y / resolution);
  grid[row][col] = grid[row][col] ? 0 : 1;
  drawGrid();
});

document.getElementById('startButton').addEventListener('click', update);
document.getElementById('clearButton').addEventListener('click', () => {
  grid = buildGrid();
  drawGrid();
});

function buildGrid() {
  return new Array(rows).fill(null)
    .map(() => new Array(cols).fill(0));
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = cell ? 'black' : 'white';
      ctx.fill();
      ctx.stroke();
    }
  }
}

function update() {
  grid = nextGen(grid);
  drawGrid();
  requestAnimationFrame(update);
}

function nextGen(grid) {
  const nextGen = grid.map(arr => [...arr]);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const cell = grid[row][col];
      let numNeighbours = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;
          if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
            const currentNeighbour = grid[y_cell][x_cell];
            numNeighbours += currentNeighbour;
          }
        }
      }

      // Rules of Life
      if (cell === 1 && numNeighbours < 2) {
        nextGen[row][col] = 0;
      } else if (cell === 1 && numNeighbours > 3) {
        nextGen[row][col] = 0;
      } else if (cell === 0 && numNeighbours === 3) {
        nextGen[row][col] = 1;
      }
    }
  }

  return nextGen;
}

drawGrid(); // Draw the initial grid
