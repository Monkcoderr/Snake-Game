const board = document.querySelector(".game-board");
const gridSize = 20;
const cells = [];



// create grid
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
  cells.push(cell);
}
 cells[42, 41, 40].classList.add("snake")[42, 41, 40]