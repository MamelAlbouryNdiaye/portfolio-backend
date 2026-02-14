import express from 'express';
import Project from '../models/Project.mjs';
const router = express.Router();


// GET all projects
router.get('/', async (req, res) => {
try {
const projects = await Project.find();
res.json(projects);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


export default router;