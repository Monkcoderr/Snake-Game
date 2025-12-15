// --- 1. SETUP ---
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Grab the HTML elements so we can update them
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const timerElement = document.getElementById("timer");
const overlay = document.getElementById("overlay");

// Game Variables
let score = 0;
let highScore = localStorage.getItem("snakeHighScore") || 0; // Load saved high score
let gameRunning = false;

// Display the initial High Score on screen
highScoreElement.innerText = highScore;

// --- 2. INPUT HANDLING ---
// When the user presses a key, hide the overlay and start the game
document.addEventListener("keydown", function(event) {
    if (!gameRunning) {
        gameRunning = true;
        overlay.style.display = "none"; // Hide the "Press Key" menu
        main(); // Start the loop
    }
    // TODO: Add your direction change logic here
    console.log("Key pressed:", event.key);
});

// --- 3. THE GAME LOOP ---
function main() {
    if (!gameRunning) return;

    setTimeout(function onTick() {
        // 1. Clear the canvas
        clearCanvas();
        
        // 2. Update Logic (Move snake, check collisions)
        // advanceSnake(); 
        
        // 3. Draw everything
        // drawSnake();
        // drawFood();

        // 4. Update Time & Stats
        updateStats();

        // Repeat
        main();
    }, 100);
}

// --- 4. HELPER FUNCTIONS ---
function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateStats() {
    // This is where you will update the timer logic later
    scoreElement.innerText = score;
}

// TODO: Define your snake array and food variables here
// let snake = ...