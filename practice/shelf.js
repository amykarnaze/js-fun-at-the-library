function shelfBook(book, scifiShelf) {
  if (scifiShelf.length < 3) {
    scifiShelf.unshift(book);
  } else {
    return scifiShelf;
  }
}

function unshelfBook(title, scifiShelf) {
  scifiShelf.splice(1, 1);
  return scifiShelf;
}

function listTitles(shelf) {
  var title = [];
  for (var i = 0; i < shelf.length; i++) {
    title.push(shelf[i].title);
  }
  return title.join(", ");
}

function searchShelf(books, title) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].title === title) {
        return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
