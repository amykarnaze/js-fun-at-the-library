function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns};
}

function saveReview(statement, reviews) {
  if (!reviews.includes(statement)){
  reviews.push(statement);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
    var book = {title: title, mainCharacter: mainCharacter, genre: genre};
    book.pageCount = calculatePageCount(title);
    return book;
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
