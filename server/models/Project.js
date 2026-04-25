import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["Individual", "Group"],
      required: true,
    },
    techStack: [String], // Example: ["React", "Node.js", "MongoDB"]
    githubLink: String,
    liveLink: String,
    image: String,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;