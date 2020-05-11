function createLibrary(libraryName) {
  var library = {name : libraryName, shelves: {fantasy: [], fiction: [], nonFiction: []}};
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, bookTitle) {
  var shelfKeys = Object.keys(library.shelves);
    for (var i = 0; i < shelfKeys.length; i++) {
      var genreBooks = library.shelves[shelfKeys[i]];
      for (var j = 0; j < genreBooks.length; j++) {
        if (genreBooks[j].title === bookTitle) {
          genreBooks.pop();
          return `You have now checked out ${bookTitle} from the ${library.name}`;
        }
      }
    }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
