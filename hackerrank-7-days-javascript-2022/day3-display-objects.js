function displayInformation() {
  // var library is defined, use it to print the information
  for (book of library) {
    var res =
      book.readingStatus === true
        ? `Already read '${book.title}' by ${book.author}.`
        : `You still need to read '${book.title}' by ${book.author}.`;
    console.log(res);
  }
}

// tail starts here
var library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

displayInformation();
