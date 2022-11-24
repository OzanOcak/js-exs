function* cookingEgg() {
  yield "fry sliced mushrooms";
  yield "fry sliced tomatoes";
  yield "add sliced rosted bell pepper";
  yield "add ketchup";
  yield "add spinach";
  yield "add piece of chesee";
  yield "add 2 eggs";
}

let nextItem = cookingEgg();

let nextbutton = document.querySelector("#next-stop");
nextbutton.addEventListener("click", () => {
  let currentItem = nextItem.next();
  if (currentItem.done) {
    console.log("you cooked it");
    nextbutton.setAttribute("disabled", true);
  } else {
    console.log(currentItem.value);
  }
});
