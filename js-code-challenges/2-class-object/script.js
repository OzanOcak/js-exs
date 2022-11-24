class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  print() {
    console.log(`title: ${this.title}, director: ${this.director}`);
  }
}

let movie = new Movie("Batman", "Tim Burton", "fantasy", 1990, 8.5);
movie.print();

Movie.prototype.getOverview = function () {
  console.log(`the movie of rating is ${this.rating}`);
};

movie.getOverview();

movie.getGenre = function () {
  console.log(`the movie of genre is ${this.genre}`);
};

movie.getGenre();
