import mongoose from 'mongoose';


const skillSchema = new mongoose.Schema({
title: String,
level: String,
icon: String
});


export default mongoose.model('Skill', skillSchema);