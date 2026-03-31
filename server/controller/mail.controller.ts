import { RequestHandler } from "express";
import { sendMessage } from "../service/email";
import { Mail } from "../models/Mail.model";

export const createEmail: RequestHandler = async (req, res) => {
  try {
    const {name, email, subject, message} = req.body
    if (!name || !email || !subject || !message) {
        res.status(400).json("All fields are required")
        return
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      res.status(400).json("Invalid email");
      return;
    }

    await Mail.create({
      name,
      email,
      subject,
      message,
    });
    await sendMessage(email, name, subject, message)

    res.status(201).json("Mail sent successfully")
    return
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to send Email");
    return;
  }
};

export const getEmails: RequestHandler = async (req, res) => {
  try {
    const { role } = req.user;
    
    if (role !== "admin") {
      res.status(401).json("UnAuthorized");
      return;
    }
    const mails = await Mail.find()
    if (!mails || mails.length < 1) {
      res.status(200).json("No Email at the moment")
      return;
    }
    res.status(200).json(mails)
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to get all Emails");
    return;
  }
};

export const deleteEmail: RequestHandler = async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== "admin") {
      res.status(401).json("UnAuthorized");
      return;
    }
    const {id} = req.params
    
    const email = await Mail.findById(id)
    if (!email) {
      res.status(404).json("Email Not Found")
      return
    }
    await Mail.findByIdAndDelete(id)
    res.status(200).json("Email deleted successfully")
  } catch (error) {
    console.log(error);
    res.status(500).json("Failed to delete Email");
    return;
  }
};