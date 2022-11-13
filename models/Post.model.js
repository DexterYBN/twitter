const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  name: String,
  likes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
