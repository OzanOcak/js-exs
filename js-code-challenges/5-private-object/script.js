let username = Symbol("username");
let password = Symbol("password");
user = {
  [username]: "Tom",
  [password]: "123456",
  age: 26,
};

console.log(user.username); // undefined
