function processData(myArray) {
  let max = myArray[0];
  myArray.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  let arr = myArray.filter((i) => i !== max);
  arr.sort((a, b) => a - b);
  console.log(arr[arr.length - 1]);
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input.split("\n")[1].split(" ").map(Number));
});
