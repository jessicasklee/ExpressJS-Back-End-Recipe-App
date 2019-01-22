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