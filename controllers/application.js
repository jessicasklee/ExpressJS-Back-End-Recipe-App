//controllers - application
const Recipe = require("../models/Recipe");

module.exports = {
    index: (req, res) => {
      Recipe.find({})
        // .populate("author")
        .then(recipess => {
          console.log(recipess)
          res.render("app/index", { Recipe: recipess });
        });
    }
  };