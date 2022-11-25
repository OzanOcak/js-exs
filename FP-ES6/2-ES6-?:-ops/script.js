const arr = [1, 2, 3, 4];

arr.forEach((a, i) => {
  a = i % 2 === 0 ? (a *= 2) : (a += 1);
  console.log(a);
});
