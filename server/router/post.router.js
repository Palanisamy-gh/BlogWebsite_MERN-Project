const express = require("express");
const router = express.Router();
const Post = require("../models/post.model.js");
const Category = require("../models/category.models.js");

const {
  getPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller.js");

router.get("/", getPost);

router.get("/:id", getSinglePost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

//fetch post by category Id
router.get("/category/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const categoryExists = await Category.findById(categoryId);
    if (!categoryExists) {
      return res.send(400).json({ message: "Invalid category Id" });
    }
    const posts = await Post.find({ category: categoryId }).populate(
      "category"
    );
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
