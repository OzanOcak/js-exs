let input = document.createElement("input");
let ul = document.createElement("ul");
let button = document.createElement("button");
document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(ul);

button.append("make them clickable");

input.addEventListener("change", function () {
  li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = this.value;
  input.value = "";
});

button.addEventListener("click", () => {
  Array.prototype.forEach.call(ul.children, (li, i) => {
    li.setAttribute("id", i);
    li.addEventListener("click", () => {
      console.log(`you pressed on #${li.id} element`);
    });
  });
});
