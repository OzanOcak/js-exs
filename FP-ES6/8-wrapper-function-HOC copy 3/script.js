const divide = (x, y) => x / y;

const divideSafe =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      new Error("result is infinitive");
    }
    return func(...args);
  };

const safe = divideSafe(divide);

console.log(safe(7, 3));
console.log(safe(7, 0));
