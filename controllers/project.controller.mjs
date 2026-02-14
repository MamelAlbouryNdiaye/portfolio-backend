import Project from "../models/Project.js";


export const getProjects = async (req, res) => {
const projects = await Project.find();
res.json(projects);
};