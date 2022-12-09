import { randomGridPosition } from "./grid.js";
import { expendSnake, onSnake } from "./snake.js";

let food = { x: 10, y: 1 };
let EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expendSnake(EXPANSION_RATE);
    food = getRandomPosition();
  }
}

export function draw(gameBoard) {
  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
