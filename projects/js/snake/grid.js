const GRID_SIZE = 42;

export function randomGridPosition() {
  return {
    x: Math.ceil(Math.random() * GRID_SIZE),
    y: Math.ceil(Math.random() * GRID_SIZE),
  };
}
export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
