import e from "express"
export const adminRouter = e.Router()

import { login, logout } from "../controller/admin.controller"

adminRouter.post('/login', login)
adminRouter.post('/logout', logout)