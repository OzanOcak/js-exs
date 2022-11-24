let arr = [["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]];
let flattedArr = arr.flat(1);
let set = new Set();
let ul = document.querySelector("#combined-menu");

flattedArr.forEach((a) => {
  set.add(a);
});

set.forEach((s) => {
  let li = document.createElement("li");
  li.innerHTML = s;
  ul.appendChild(li);
});
