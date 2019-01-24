const express = require("express")
// const router = express.Router();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const passport = require('passport');
const cookieParser = require('cookie-parser')
const session = require('express-session')
// const usersController = require('./controllers/users') *not on twitter-express*
const flash = require('connect-flash')
const app = express();

app.use(flash())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

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

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.listen(3000, () => console.log("server is running"));
