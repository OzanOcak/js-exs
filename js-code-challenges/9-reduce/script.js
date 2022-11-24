const CoffeeData = (arr) => {
  let sum = arr.reduce((acc, a) => (acc += a), 0);
  return (sum *= 1.25);
};
arr = [1.24, 5, 3.45, 4.5];

console.log(CoffeeData(arr));
