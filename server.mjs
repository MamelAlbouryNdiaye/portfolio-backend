// server.mjs
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import cors from 'cors';
import projectRoutes from './routes/project.routes.mjs';
import skillsRouter from './routes/skill.routes.mjs';
import path from 'path';
import log from './middlewares/loginMiddleware.mjs';
import globalErr from './middlewares/globalErr.mjs';

// Load env variables
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 10000;

// Connect to MongoDB Atlas
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(log);

// Static folder for uploads
app.use("/uploads", express.static("uploads"));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🎉");
});

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillsRouter);

// Global Error Handler
app.use(globalErr);

// Start server
app.listen(port, () => console.log(`Server running on ${port}`));
