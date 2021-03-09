const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// here we are creating the schema for the DB 
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  thumbnail: { type:String},
  link: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;