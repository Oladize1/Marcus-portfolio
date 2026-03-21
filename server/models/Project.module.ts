import mongoose from "mongoose";


const ProjectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectdesc: {
        type: String,
        required: true
    },
    projectTags: {
        type: [String],
        required: true 
    },
    projectSrcLink: {
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