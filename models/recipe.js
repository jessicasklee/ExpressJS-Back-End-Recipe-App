//models - recipe

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
  