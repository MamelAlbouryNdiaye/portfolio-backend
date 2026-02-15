import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import projectRoutes from './routes/project.routes.mjs';
import skillsRouter from './routes/skill.routes.mjs';
import globalErr from './middlewares/globalErr.mjs';
import log from './middlewares/loginMiddleware.mjs';

// Setup
dotenv.config();
const app = express();
const port = process.env.PORT || 3030;

// ------------------
// Database Connection
// ------------------
const mongoURL = process.env.mongoURL || 'mongodb://localhost:27017/mon_portfolio';

mongoose.connect(mongoURL) // ✅ plus d'options
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ------------------
// Middlewares
// ------------------
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(log);

// ------------------
// Routes
// ------------------
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillsRouter);

// ------------------
// Error Handling Middleware
// ------------------
app.use(globalErr);

// ------------------
// Start Server
// ------------------
app.listen(port, () => console.log(`Server running on ${port}`));
