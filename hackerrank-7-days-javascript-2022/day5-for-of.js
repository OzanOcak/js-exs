//Write your code below this line.
"use strict";
for (let str of my_array) {
  if (str.toLowerCase() === str.split("").reverse().join("").toLowerCase()) {
    console.log(str);
  }
}
