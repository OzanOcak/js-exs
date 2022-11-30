function processData(input) {
  let res = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      res += j % 2 === 0 ? "\u2571" : "\u2572";
    }
    console.log(res + "\n");
    res = "";
  }

  //console.log(Array(15).join(Array(8).join("\u2571\u2572")+'\n'));
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
