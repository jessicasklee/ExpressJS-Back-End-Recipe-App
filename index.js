//routes -> index
const express = require("express")
const router = express.Router();

//application
router.get('/', applicationController.index);

//index
router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/recipe', require('./recipe'));

//recipe
router.post("/", recipeController.create);
router.get("/new", recipeController.new);
router.get("/:id", recipeController.show);
router.put("/:id", recipeController.update);

//user
router.get("/new", userController.new);
router.get("/:id", userController.show);
router.post("/", userController.create);


//controllers - application

module.exports = {
  index: (req, res) => {
    Recipe.find({})
      .populate("author")
      .then(recipe => {
        res.render("app/index", { recipess });
      });
  }
};

//controllers - recipe

module.exports = {
  show: (req, res) => {
    Recipe.findOne({ _id: req.params.id })
      .populate("author")
      .then(recipe => {
          res.render("index", tweet);
      })
  },

  new: (req, res) => {
    User.find({}).then(users => {
      res.render("recipe/new", { users });
    });
  },

  create: (req, res) => {
    Recipe.create({
      content: req.body.recipe.content,
      author: req.body.author
    }).then(recipe => {
      User.findOne({ _id: req.body.author }).then(user => {
        user.recipess.push(recipe);
        user.save(err => {
          res.redirect(`/recipe/${recipe._id}`);
        });
      });
    });
  },

  update: (req, res) => {
    let { content, author } = req.body;
      tweet.save(err => {
        res.redirect(`/tweet/${tweet._id}`);
      });
  }
};

//controllers - user

module.exports = {
	show: (req, res) => {
		User.findById(req.params.id)
			.populate({
				path: "recipess",
				options: { limit: 5, sort: { createdAt: -1 } }
			})
			.then(user => {
				res.render("index", { user })
			})
	},
	new: (req, res) => {
    res.render("user/new")
	},
	create: (req, res) => {
		User.create({
			email: req.body.email,
			password: req.body.password
		}).then(user => {
			res.redirect(`/user/${user._id}`)
		})
	}
}


app.listen(4000, () => {
  console.log("app listening on port 4000")
})

//routes -> application
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.js');

router.get('/', applicationController.index);

module.exports = router;


