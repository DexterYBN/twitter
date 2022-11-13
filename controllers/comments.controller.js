const Comment = require("../models/Comment.models");

module.exports.commentControllers = {
  createComment: async (req, res) => {
    const { text, user, post } = req.body;
    try {
      const comment = await Comment.create({
        text,
        user,
        post,
      });
      res.json(comment);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("DELETED");
    } catch (e) {
      res.json(e.message);
    }
  },

  getComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id).populate(
        "user, post"
      );

      res.json(comment);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCommentbyPost: async (req, res) => {
    try {
      const comment = await Comment.find({ post: req.params.id }).populate(
        "user, post"
      );
      res.json(comment);
    } catch (error) {
      res.json(error.message);
    }
  },
};
