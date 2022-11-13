const { Router } = require("express");

const { commentControllers } = require("../controllers/comments.controller.js");

const router = Router();

router.post("/comment", commentControllers.createComment);
router.delete("/comment/:id", commentControllers.deleteComment);
router.get("/comment/:id", commentControllers.getComment);
router.get("/comment/post/:id", commentControllers.getCommentbyPost);

module.exports = router;
