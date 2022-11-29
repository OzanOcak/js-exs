import { exec } from "child_process";

let input = "Carbon";

// any unix based command
let cmdToLaunch = `curl https://en.wikipedia.org/wiki/${input}`;

function execCB(error, stdout, stderr) {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log("stdout: " + stdout);
  console.log("stderr: " + stderr);
}

let app = exec(cmdToLaunch, execCB);

//----------------------------------------
/*
let btn = document.querySelector(".searchBtn");
let search_text = document.querySelector(".search");
let raw_data = document.querySelector(".raw_data");

search_text.addEventListener("change", () => {
  raw_data.innerHTML = this.value;
});

btn.addEventListener("click", () => {
  app();
});
*/
