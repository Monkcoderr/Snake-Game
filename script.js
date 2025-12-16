const board = document.querySelector(".game-board");
const gridSize = 20;
const cells = [];
let snake = [42, 41, 40];
console.log(snake[0])


// create grid
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  board.appendChild(cell);
  cells.push(cell);
}
function drawSnake() {
  snake.forEach(index => {
    cells[index].classList.add("snake");
  });
}

function clearSnake(){
    snake.forEach(index =>{
       cells[index].classList.remove("snake") 
    })
}
clearSnake()
drawSnake()