const {
  getAllCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller.js");

const express = require("express");
const router = express.Router();

//Get all category
router.get("/", getAllCategories);

//Get a single category
router.get("/:id", getSingleCategory);

//Create a new category
router.post("/", createCategory);

//Update a category
router.put("/:id", updateCategory);

//Delete a category
router.delete("/:id", deleteCategory);

module.exports = router;
