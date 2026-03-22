import e from "express"
export const adminRouter = e.Router()
import { isAuth } from "../middleware/isAuth"

import { login, logout } from "../controller/admin.controller"

adminRouter.post('/login', login)
adminRouter.post('/logout', logout)

adminRouter.get('/me', isAuth, (req, res) => {
    res.status(200).json({ role: 'admin' })
})