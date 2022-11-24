function click() {
  let clock = document.querySelector("#clock");
  let startTime = new Date();
  let time = setInterval(() => {
    let date = new Date();
    let click = date.toLocaleTimeString();
    if (date.getTime() - startTime.getTime() >= 60 * 1000) {
      console.log("1 min passed");
      clearInterval(time);
    }
    clock.innerHTML = click;
  }, 1000);
}
click();
