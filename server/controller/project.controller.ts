import { Project } from "../models/Project.module"
import { RequestHandler } from "express"
import { uploadImg } from "../config/cloudinary"

export const getProjects: RequestHandler = async (req, res) => {
    try {
        
        const projects = await Project.find()
        if (!projects || projects.length === 0) {
            res.status(200).json("No project at the moment")
            return;
        }
        res.status(200).json(projects)
        return
    } catch (error) {
        res.status(500).json("Failed to get all projects")
        return;
    }
}

export const createProject: RequestHandler = async (req, res) => {
    try {
        const { role } = req.user;
        
        if (role !== "admin") {
          res.status(401).json("UnAuthorized");
          return;
        }
        const file = req.file;

        if (!file) {
          res.status(400).json("Image is required");
          return;
        }
       const {projectTitle, projectdesc, projectLink, projectSrcLink} = req.body
       if (!projectTitle || !projectdesc || !projectLink) {
        res.status(400).json("All fields are required")
        return;
       }

       const rawTags = req.body.projectTags;

       const projectTags = Array.isArray(rawTags)
         ? rawTags
         : rawTags
           ? [rawTags]
           : [];

       if (projectTags.length < 4) {
        res.status(400).json("Project tags must at least be four")
        return;
       }
       const uploadImage = file ? await uploadImg(file.path) : null;
       const projectImgUrl = uploadImage ? uploadImage.secure_url : "https://via.placeholder.com/800x600?text=Demo+Image";

       const newProject = new Project({
        projectTitle,
        projectdesc,
        projectImg: projectImgUrl,
        projectTags,
        projectLink,
        projectSrcLink
       })
       await newProject.save()
       res.status(201).json(newProject)
       return;
    } catch (error) {
        res.status(500).json("Failed to get all projects")
        return;
    }
}

export const editProject: RequestHandler = async (req, res) => {
    try {
        const { role } = req.user;
        if (role !== "admin") {
          res.status(401).json("UnAuthorized");
          return;
        }
        const {id} = req.params
        const {
          projectTitle,
          projectdesc,
          projectTags,
          projectLink,
          projectSrcLink,
        } = req.body; 

        const project = await Project.findById(id)
        if (!project) {
            res.status(404).json("Project not Found")
            return;
        }
        const editProjectDetails: any = {}
        if (projectTitle) editProjectDetails.projectTitle = projectTitle
        if (projectdesc) editProjectDetails.projectdesc = projectdesc;
        if (req.file) {
            const photo = await uploadImg(req.file.path)
            editProjectDetails.projectImg = photo.secure_url;
        }
        if (projectTags) {
          if (projectTags.length < 4) {
            res.status(400).json("At least 4 tags required");
            return;
          }
          editProjectDetails.projectTags = projectTags;
        }
        if (projectLink) editProjectDetails.projectLink = projectLink;
        if (projectSrcLink) editProjectDetails.projectSrcLink = projectSrcLink;

        const editedProject = await Project.findByIdAndUpdate(id, editProjectDetails, { returnDocument: 'after' })
        res.status(200).json(editedProject)
        return
    } catch (error) {
        console.log(error);
        res.status(500).json("Failed to edit project")
        return 
    }
}

export const deleteProject: RequestHandler = async (req, res) => {
    try {
        const { role } = req.user;
        if (role !== "admin") {
          res.status(401).json("UnAuthorized");
          return;
        }
        const {id} = req.params

        const project = await Project.findByIdAndDelete(id)
        if (!project) {
            res.status(404).json("Project Not Found")
            return
        }
        res.status(200).json("Project deleted successfully")
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json("Failed to delete a Project")
        return;
    }
}