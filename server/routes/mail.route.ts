import e from "express"
export const emailRouter = e.Router()

import { isAuth } from "../middleware/isAuth"

import { createEmail, getEmails, deleteEmail } from "../controller/mail.controller"

emailRouter.post('/send', createEmail)
emailRouter.get('/', isAuth, getEmails)
emailRouter.delete('/:id/delete_email', isAuth, deleteEmail)
