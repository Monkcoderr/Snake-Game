const board = document.querySelector(".game-board");
const gridSize = 20;
const cells = [];
let snake = [25, 24, 23];




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
drawSnake()

function clearSnake(){
    snake.forEach(index =>{
       cells[index].classList.remove("snake") 
    })
}


 


function movesnake(){
    clearSnake()
    const head = snake[0];
    const newhead = head + direction;

    snake.unshift(newhead);
    if (newhead === foodIndex) {
  cells[foodIndex].classList.remove("food");
  genrateFood();
} else {
  snake.pop();
}

   drawSnake()
    
}
setInterval(movesnake, 200);

document.addEventListener("keydown",e=>{
    switch(e.key){
    case "ArrowUp":
        direction = -20;
        break;
        case "ArrowDown" :
            direction = 20;
            break;
            case "ArrowLeft" :
                direction = -1;
                break;
                case "ArrowRight":
                    direction = 1
                    break;





}
})


function genrateFood(){
    foodIndex = Math.floor(Math.random()*cells.length);
    cells[foodIndex].classList.add("food")
}
genrateFood()
 function multiplayer(){
if(true){
   function immortiality(){
  indexedDB.foodIndex(
  requestAnimationFrame(B.foodIndex(
  requestAniasasfdasfasmationFrame(
    animated.FragmentDirefsdsafsdfhfsghfsfsfctivesdtoolbar( animated.toolbar()
    animated.setTiemnfunnctiodghdfgasdkfhhttoolbar()
  ))
    animated.toolbar()
  )
  )
 }
  FragmentDirefsdsafsdfhfsghfsfsfctive = nothing
  setTiemnfunnctiodghdfgasdkfhht,500)ion highscofunction to breakrer(){
  
}
 }






