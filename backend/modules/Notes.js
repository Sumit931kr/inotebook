const mongoose = require('mongoose');


const NotesSchema = new Schema({
  tittle : {
      type: String,
      required : true,
      unique: true
  },
  description : {
    type: String,
    required : true,
  },
  tag : {
    type: String,
    default : "General"
  },
  date : {
    type: Date,
    default : Date.now
  },
  });

  module.exports = mongoose.model('Notes',NotesSchema);