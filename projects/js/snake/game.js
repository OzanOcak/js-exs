import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { outsideGrid } from "./grid.js";
const gameBoard = document.getElementById("game-board");
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    return alert("you lose");
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  update();
  draw();
  lastRenderTime = currentTime;
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  console.log(gameOver);
}
