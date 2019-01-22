//models - user

const User = new Schema({
    email: String,
    password: String,
    recipess: [
      {
        type: Schema.Types.ObjectId,
        ref: "Recipe"
      }
    ]
  });
  
  app.listen(4000, () => {
    console.log("app listening on port 4000")
  })