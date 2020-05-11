var searchShelf = require('../src/shelf.js').searchShelf;
var checkoutBook = require('../src/library.js').checkoutBook;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, time) {
    if (time === true) {
      return `Good morning, ${name}!`
    } else {
    return `Hello, ${name}!`
    }
  }

  findBook(bookTitle) {
    var shelves = this.library.shelves;
    var genres = Object.keys(shelves);
    var isBookInLibrary = false;
    for (var i = 0; i < genres.length; i++) {
      if (searchShelf(shelves[genres[i]], bookTitle)) {
      isBookInLibrary = true;
      }
    }
    checkoutBook(this.library, bookTitle);
    if (isBookInLibrary === true) {
      return `Yes, we have ${bookTitle}`;
    } else {
    return `Sorry, we do not have ${bookTitle}`;
    }
  }

  calculateLateFee(number) {
    return Math.ceil(number * .25);
  }

}


module.exports = Librarian;
