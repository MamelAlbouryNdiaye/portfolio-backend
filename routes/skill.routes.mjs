import express from 'express';
import Skill from '../models/Skill.mjs';
const router = express.Router();


// GET all skills
router.get('/', async (req, res) => {
try {
const skills = await Skill.find();
res.json(skills);
} catch (err) {
res.status(500).json({ message: err.message });
}
});


export default router;

