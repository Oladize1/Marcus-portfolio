import e from "express"
export const adminRouter = e.Router()
import { isAuth } from "../middleware/isAuth"

import { login, logout } from "../controller/admin.controller"

adminRouter.post('/login', login)
adminRouter.post('/logout', logout)

adminRouter.get('/me', isAuth, (req, res) => {
    const userRole = (req as any).user?.role || 'admin';
    res.status(200).json({ role: userRole });
})