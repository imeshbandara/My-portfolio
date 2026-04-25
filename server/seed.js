import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config();

const projects = [
  {
    title: "VisitCeylonX",
    description: "A comprehensive tourism platform for Sri Lanka featuring an AI travel itinerary planner.",
    category: "Individual",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/imeshbandara/visitceylonx",
    liveLink: "#",
    image: "https://via.placeholder.com/600x400"
  },
  {
    title: "Scoop Heaven",
    description: "A dynamic ice cream shop website with administrative order management and flavor tracking.",
    category: "Group",
    techStack: ["PHP", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/imeshbandara/scoop-heaven",
    liveLink: "#",
    image: "https://via.placeholder.com/600x400"
  }
];

const seedDB = async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI ||
      process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/portfolio";

    await mongoose.connect(mongoUri);

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