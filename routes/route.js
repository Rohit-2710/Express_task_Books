const express = require("express");
const routing = express.Router();
const book = require("../services/services");

//get books
routing.get("/getBooks", (req, res) => {
  result = bookDetails.Show();
  res.json(result);
});
module.exports = routing;

//add movies
routing.post("/addBooks", (req, res) => {
  var book = JSON.stringify(req.body);
  result = bookDetails.addBook(book);
  if (result) {
    res.json("Successfull");
  } else {
    res.json("Error");
  }
});

routing.get("/getBooks/:bookname", (req, res) => {
  bname = req.params.bookname;
  result = bookDetails.getBook(bname);
  if (result) {
    res.json(result);
  } else {
    res.json("Error");
  }
});

routing.delete("/Delete/:bookname", (req, res) => {
  bname = req.params.bookname;
  result = bookDetails.deleteBook(bname);
  if (result) {
    res.json("Success");
  } else {
    res.json("Error");
  }
});
routing.put("/update/:bookname/:key/:value", (req, res) => {
  bname = req.params.bookname;
  key = req.params.key;
  value = req.params.value;
  result = bookDetails.updateBook(bname, key, value);
  if (result) {
    res.json("Successfull");
  } else res.json("Error");
});
