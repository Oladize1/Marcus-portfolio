import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectTags: [{
        type: String,
        required: true 
    }],
    ProjectSrcLink: {
        type: String,
        required: true
    },
    projectLink: {
        type: String
    },
    projectImg: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Project = mongoose.model('Project', ProjectSchema)