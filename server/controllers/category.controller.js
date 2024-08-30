const Category = require("../models/category.models.js");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
    slug: req.body.slug,
    description: req.body.description,
  });
  try {
    const newCategory = await category.save();
    res.status(201).json({ newCategory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({ message: "category not found" });
    }
    category.name = req.body.name || category.name;
    category.slug = req.body.slug || category.slug;
    category.description = req.body.description || category.description;
    category.updatedAt = Date.now();

    const updateCategory = await category.save();
    res.json(updateCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    await Category.findByIdAndDelete(category._id);
    res.json({ message: "category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
