const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

const countToFive = async () => {
  console.log("starting.....");
  await delay(1);
  console.log("one second..");
  await delay(1);
  console.log("two second..");
  await delay(1);
  console.log("three second..");
  await delay(1);
  console.log("four second..");
  await delay(1);
  console.log("done..");
};
countToFive();
