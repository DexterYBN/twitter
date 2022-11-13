const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
  },
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;
