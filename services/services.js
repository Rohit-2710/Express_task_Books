books = [
  {
    price: { sub: 200, nosub: 300 },
    bookid: 1,
    bookname: "First_Book",
    Author: "Rohit",
  },
];

bookDetails = {};

bookDetails.Show = () => {
  return books;
};

bookDetails.getBook = (bname) => {
  if (bname) {
    for (let i = 0; i < books.length; i++) {
      if (books[i]["bookname"] === bname) {
        return books[i];
        console.log("Success");
      } else {
        return false;
      }
    }
  }
};

bookDetails.addBook = (Book) => {
  if (Book) {
    let bookObj = JSON.parse(Book);
    books.push(bookObj);
    console.log(books);
    return true;
  } else {
    return false;
  }
};

bookDetails.deleteBook = (bname) => {
  if (bname) {
    let index = 0;
    for (let i = 0; i < books.length; i++) {
      if (books[i]["bookname"] === bname) {
        index = i;
        break;
      }
    }
    books.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

bookDetails.updateBook = (bname, key, value) => {
  if (bname) {
    for (let i = 0; i < books.length; i++) {
      if (books[i]["bookname"] === bname) {
        books[i][key] = value;
        return true;
      }
    }
  } else return false;
};

module.exports = bookDetails;
