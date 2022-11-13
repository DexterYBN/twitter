const Post = require("../models/Post.model");

module.exports.postControlles = {
  cratePost: async (req, res) => {
    try {
      const { title, name, likes } = req.body;
      await Post.create({
        title,
        name,
        likes,
      });
      res.json("ПОСТ ДОБАВЛЕН");
    } catch (error) {
      res.json(error.message);
    }
  },

  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete();
      res.json("DELETED");
    } catch (error) {
      res.json(error.message);
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.find().populate("likes", "name");
      res.json(post);
    } catch (error) {
      res.json(error.message);
    }
  },

  likesPost: async (req, res) => {
    try {
      // if(!Post.findById('postID').likes. includes('userId')){
      const post = await Post.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.params.likeid },
      });
      res.json(post);
      //   else {
      //     const post = await Post.findByIdAndUpdate(req.params.postId,{$pull:{likes: req.params.id}});
      //     res.json(post);
      //   }
    } catch (error) {
      res.json(error.message);
    }
  },

  relikePost: async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.params.id },
      });
      res.json(post);
    } catch (error) {
      res.json(error.message);
    }
  },
};
