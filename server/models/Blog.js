const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true }, // A short summary
  content: { type: String, required: true }, // The full article text
  date: { type: Date, default: Date.now },
  tags: [String],
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);