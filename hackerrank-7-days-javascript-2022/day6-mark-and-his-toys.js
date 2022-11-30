function processData(input) {
  //Enter your code here
  let arr = input.split("\n");
  let arr0 = arr[0].split(" ");
  let arr1 = arr[1].split(" ");
  let numOfItems = arr0[0];
  let maxPrice = arr0[1];
  let count = 0;
  let sum = 0;

  arr1.sort((a, b) => a - b);

  for (let i = 0; i < parseInt(numOfItems); i++) {
    sum += parseInt(arr1[i]);
    if (parseInt(maxPrice) >= sum) {
      count++;
    }
  }
  console.log(count);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
