// modify array without altering it

const arr = [1, 2, 3, 4];
arr.reverse();
arr[0] = 100;
console.log(arr);

// slice()

arr2 = arr.slice();
arr2[1] = 30;
arr2.reverse();
console.log(arr, arr2);
