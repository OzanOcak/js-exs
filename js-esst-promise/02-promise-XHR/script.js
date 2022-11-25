const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    console.log(request);
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = (err) => rejects(err);
    request.send();
  });
};
spacePeople()
  .then((data) => (arr = data.people))
  .then((arr) => arr.forEach((el) => console.log(`${el.name} at ${el.craft}`)))
  .catch((err) => console.error(new Error("can't load space people", err)));
