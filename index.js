const express = require("express")
const router = express.Router();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("log", function(data) {
  let context = { ...data };
  delete context.settings;
  delete context.body;
  console.log(context);
  return JSON.stringify(context);
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));

app.listen(3000, () => console.log("server is running"));
