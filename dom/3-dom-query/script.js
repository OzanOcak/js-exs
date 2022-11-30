const textarea = document.querySelector("textarea[name=source]");
const output = document.querySelector("#output");
const matches = document.querySelector("#matches");

textarea.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
});

document.forms.queryall.addEventListener("submit", (e) => {
  e.preventDefault();

  refreshQuery(e.target.selector.value);

  return;
});

//refreshOutput(textarea.value);

function refreshQuery(selector) {
  matches.innerHTML = "";

  output.querySelectorAll(selector).forEach((el) => {
    const li = document.createElement("li");
    li.innerText = el.outerHTML;

    matches.appendChild(li);
  });
}
