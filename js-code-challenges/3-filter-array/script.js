const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

let ul = document.querySelector("#menu");

let veggie = menu.filter((food) => {
  if (food.isVegetarian === true) {
    let li = document.createElement("li");
    li.innerHTML = food.name;
    ul.appendChild(li);
  }
});
