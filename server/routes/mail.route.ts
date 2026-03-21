import e from "express"
export const emailRouter = e.Router()

import { createEmail, getEmails, deleteEmail } from "../controller/mail.controller"

emailRouter.get('/', getEmails)
emailRouter.post('/send', createEmail)
emailRouter.delete('/:id/delete_email', deleteEmail)
