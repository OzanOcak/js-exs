const githubUser = async (login) => {
  let data = await fetch(`https://api.github.com/users/${login}`);
  let jsoned = await data.json();
  let info = `${jsoned.name} lives in ${jsoned.location}`;
  console.log(info);
};
githubUser("OzanOcak");
