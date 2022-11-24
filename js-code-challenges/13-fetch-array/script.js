let fetchUser = async () => {
  let data = await fetch("https://randomuser.me/api/?results=5");
  let users = await data.json();
  //console.log("data:", data); // http respond
  //console.log(users); // Promise
  console.log(users.results);
  const div = document.querySelector("#timeline");

  users.results.forEach((user) => {
    let img = document.createElement("img");
    img.src = user.picture.large;
    div.appendChild(img);
  });
};
fetchUser();
