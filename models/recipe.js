//models - recipe
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Recipe = new Schema({
    title: String,
    description: String,
    instructions: {
      step1: String,
      step2: String,
      step3: String,
      step4: String,
      step5: String,
    },
    ingredients: []
  });

  module.exports = {
    Recipe: mongoose.model("Recipe", Recipe)
  };
  
  