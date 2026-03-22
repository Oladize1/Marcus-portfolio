import e from "express"
export const projectRouter = e.Router()

import { isAuth } from "../middleware/isAuth"

import { upload } from "../config/multer"

import { getProjects, createProject, editProject, deleteProject } from '../controller/project.controller'

projectRouter.get('/', getProjects)

projectRouter.use(isAuth)
projectRouter.delete('/:id/delete', deleteProject)
projectRouter.post("/create", upload.single("projectImg"), createProject);
projectRouter.put("/:id/edit", upload.single("projectImg"), editProject);
