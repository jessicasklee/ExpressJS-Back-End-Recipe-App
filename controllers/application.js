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

// // GET /
// router.get('/', (req, res) => {
//   res.render('index')
// })

// // GET /signup
// router.get('/signup', (req, res) => {
//   res.render('signup', {message: req.flash('signupMessage')})
// })

// // POST /signup
// router.post('/signup', (req, res) => {
//   var signupStrategy = passport.authenticate('local-signup', {
//     successRedirect: '/',
//     failureRedirect: '/signup',
//     failureFlash: true
//   })
//   return signupStrategy(req, res)
// })

// module.exports = router