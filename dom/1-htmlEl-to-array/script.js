let list = document.getElementById("animals");

//console.log(list.children[0].children[1].innerText); // all the first tr of second td
//list.children.forEach XXXXX not workig -> html eelment

let total = 0;

Array.prototype.forEach.call(list.children, (tr) => {
  const td = tr.children[1];

  if (tr.id === "totals") {
    td.innerText = total;
  } else {
    const number = parseInt(td.innerText);
    total += number;
  }
});
