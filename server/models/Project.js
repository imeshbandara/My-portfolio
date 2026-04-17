const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [String], // Array of strings e.g. ["React", "Node"]
  image: String,
  liveLink: String,
  githubLink: String,
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);