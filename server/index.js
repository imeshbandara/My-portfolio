import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from './routes/projectRoutes.js';



dotenv.config();

connectDB(); 

const app = express();



app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

//mongodb+srv://portfolio_user:123456imeshnb@cluster0.pf9ql4o.mongodb.net/?appName=Cluster0
// 123456imeshnb , portfolio_user
app.get("/", (req, res) => {
  res.send("API is running successfully!");
});



const PORT = process.env.PORT || 5001;

app.listen(PORT,
     () => {
        console.log("Server running on port 5001 ")
      });

      //npx nodemon index.js