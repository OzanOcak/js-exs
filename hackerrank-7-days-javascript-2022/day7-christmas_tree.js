console.log(`${" ".repeat(9)}*`);
for (let j = 1, i = 9; j < 9, i > 0; j += 2, i--) {
  console.log(`${" ".repeat(i)}${"0".repeat(j)}`);
}
