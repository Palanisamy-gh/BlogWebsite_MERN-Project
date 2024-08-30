const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: { type: String },
  postedAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

const postModel = mongoose.model("Post", PostSchema);

module.exports = postModel;
