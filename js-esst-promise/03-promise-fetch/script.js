/*
const spacePeople = async () => {
  let data = await fetch("http://api.open-notify.org/astros.json");
  let users = await data.json();
  let usersArr = users.people;

  usersArr.forEach((user) => {
    console.log(user.name);
  });
};
spacePeople();
*/

let fetchUsers = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

let getNames = () =>
  fetchUsers()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((names) => names.join(", "));

getNames().then(console.log);
