const { Router } = require("express");

const { postControlles } = require("../controllers/posts.controller.js");

const router = Router();

router.post("/post", postControlles.cratePost);
router.delete("/post/:id", postControlles.deletePost);
router.get("/post", postControlles.getPost);
router.patch("/post/:id/post/likeid", postControlles.likesPost);
router.patch("/post/:id", postControlles.relikePost);

module.exports = router;
