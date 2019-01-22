//models - recipe
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  });

  module.exports = {
    Recipe: mongoose.model("Recipe", Recipe)
  };
  
  