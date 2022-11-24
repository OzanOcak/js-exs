function permutation(str) {
  if (str.length === 1) {
    return 1;
  }
  return str.length * permutation(str.slice(0, str.length - 1));
}

console.log(permutation("hello"));
