const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipes_db");
mongoose.Promise = Promise;
module.exports = mongoose;