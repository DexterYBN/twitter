const { Router } = require("express");

const { userControllers } = require("../controllers/users.controller.js");

const router = Router();

router.post("/user", userControllers.createUser);
router.patch("/user/:id/post/:postId", userControllers.savePost);
router.patch("/user/:id/deletepost/:deletepostId", userControllers.deletingSave);

module.exports = router;
