import jwt from 'jsonwebtoken'
import { RequestHandler } from 'express'

export const isAuth: RequestHandler = async (req, res, next) => {
    try {
        const token = req.cookies.token
        
        if (!token) {
          res.status(403).json("Forbidden: No token provided");
          return;
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET!)
        req.user = decode
        next()
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
          res.status(401).json("Unauthorized: Invalid or expired token");
          return;
        }
        console.log(error)
        res.status(500).json("Internal Server Error")
        return
    }
}