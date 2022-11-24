function sortLibrary() {
  // var library is defined, use it in your code
  // use console.log(library) to output the sorted library data
  library.sort((obj1, obj2) => {
    if (obj1.title < obj2.title) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(library);
}

// tail starts here
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    libraryID: 1254,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    libraryID: 4264,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final ",
    libraryID: 3245,
  },
];

sortLibrary();
