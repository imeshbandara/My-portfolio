import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "VisitCeylonX",
    description: "A comprehensive tourism platform for Sri Lanka featuring an AI travel itinerary planner.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/imeshbandara/visitceylonx",
    liveLink: "#",
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "Scoop Heaven",
    description: "A dynamic ice cream shop website with administrative order management and flavor tracking.",
    techStack: ["PHP", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/imeshbandara/scoop-heaven",
    liveLink: "#",
    image: "https://via.placeholder.com/600x400"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Project.deleteMany(); // Clears existing projects
    await Project.insertMany(projects);

    console.log("✅ Data Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedDB();