const User = require("../models/User.model");

module.exports.userControllers = {
  createUser: async (req, res) => {
    const { name } = req.body;
    try {
      await User.create({
        name,
      });
      res.json("ЮЗЕР ДОБАВЛЕН");
    } catch (error) {
      res.json(error.message);
    }
  },

  savePost: async (req, res) => {
    try {

      const save = await User.findByIdAndUpdate(req.params.id, {
        $push: { saves: req.params.postId },
      });
      res.json(save);
    } catch (error) {
      res.json(error.message);
    }
  },

  deletingSave: async (req, res) => {
    try {
      const save = await User.findByIdAndUpdate(req.params.id, {
        $pull: { saves: req.params.deletepostId },
      });
      res.json(save);
    } catch (error) {
      res.json(error.message);
    }
  },
};
