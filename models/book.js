var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Author = require('./author');

//this has to be declared before you called it on the BookSchema.
var CharacterSchema = new Schema({
  name: String
});

var BookSchema = new Schema({
     title: String,
     author: {type: Schema.Types.ObjectId, ref: 'Author'},
     image: String,
     releaseDate: String,
     characters: [CharacterSchema]
});


var Book = mongoose.model('Book', BookSchema);
//do I need the line bellow when doing embebed?
var Character = mongoose.model('Character', CharacterSchema);
module.exports = Book;
