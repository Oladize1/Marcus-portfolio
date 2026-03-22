import e from "express"
export const emailRouter = e.Router()

import { isAuth } from "../middleware/isAuth"

import { createEmail, getEmails, deleteEmail } from "../controller/mail.controller"

emailRouter.get('/', isAuth, getEmails)
emailRouter.post('/send', createEmail)
emailRouter.delete('/:id/delete_email', isAuth, deleteEmail)
