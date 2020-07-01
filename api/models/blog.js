const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, default: "" },
  content: { type: String, default: "" },
  author: { type: String, default: "" },
  date: { type: String, default: "" },
  imageurl: String,

  likes: { type: Number, default: 0 },
  comments: { type: Array, default: [] },
});

module.exports = mongoose.model("Blog", blogSchema);
