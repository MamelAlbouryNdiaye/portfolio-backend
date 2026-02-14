import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import cors from "cors";
import projectRoutes from './routes/project.routes.mjs'
import skillsRouter from './routes/skill.routes.mjs';
import path from "path";


import globalErr from './middlewares/globalErr.mjs';
import log from './middlewares/loginMiddleware.mjs';


// setup
dotenv.config();
const app = express();
const port = process.env.PORT || 3030;


// db connection
connectDB();

// Middlewares - ordre propre
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static("uploads"));

// Optional: logger middleware (vérifier si export default est un middleware)
app.use(log);

//Routes
app.use("/api/projects", projectRoutes);
app.use('/api/skills', skillsRouter);


// error Handling middleware
app.use(globalErr);

app.listen(port, () => console.log(`Server running on ${port}`));