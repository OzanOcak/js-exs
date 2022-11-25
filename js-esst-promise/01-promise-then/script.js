const delay = (sec) =>
  new Promise((resolve, reject) => {
    if (typeof sec !== "number") {
      reject(new Error("seconds input is not a number"));
    }
    setTimeout(resolve, sec * 1000);
  });
console.log("starts....");
delay(2).then(() => console.log("2 secs passed"));
delay(1).then(() => console.log("1 sec passed"));
delay(2).then(() => console.log("2 secs passed"));
delay(3).then(() => console.log("3 secs passed"));
