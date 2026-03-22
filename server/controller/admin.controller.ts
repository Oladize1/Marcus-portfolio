import { Admin } from "../models/Admin.model";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) => {
    try {
        const {username, password} = req.body
        if (!username || !password) {
            res.status(400).json("All fields are required")
            return;
        }
        const admin = await Admin.findOne({username})
        if (!admin) {
            res.status(404).json("User Not Found")
            return
        }
        const checkPasswod = await bcrypt.compare(password, admin.password)
        if (!checkPasswod) {
            res.status(400).json('Invalid credentials')
            return
        }
        const token = jwt.sign({id: admin._id, role: admin.role} ,process.env.JWT_SECRET!, {expiresIn: '7d'})
        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json("login sucessful")
        return
    } catch (error) {
        console.log(error)
        res.status(500).json("Failed to login")
        return
    }
}

export const logout: RequestHandler = async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true });
        res.status(200).json("log out successfully")
        return
    } catch (error) {
        console.log(error)
        res.status(500).json("Failed to logout")
        return
    }
}