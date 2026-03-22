import express, { Request, Response } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'

import { projectRouter } from "./routes/project.route";
import { emailRouter } from "./routes/mail.route";
import { adminRouter } from "./routes/admin.route";

import { connectDb } from './config/connectDb'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://marcus-oladunjoye-portfolio.netlify.app",
      "https://marcus-portfolio-admin.netlify.app",
    ],
    credentials: true,
  }),
);
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/projects', projectRouter)
app.use('/api/mail', emailRouter)
app.use('/api/admin', adminRouter)

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json("Server working");
});


const startApp = async () => {
  try {
    let env = process.env.NODE_ENV
    let uri: string;
    if (env === 'development') {
      uri = process.env.MONGO_URI!
    }else if(env === 'production'){
      uri = process.env.MONGO_URI_ATLAS!
    }else {
      throw new Error("NODE ENV not set");
    }
    await connectDb(uri)
    app.listen(PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (error) {
    throw new Error(String(error))
  }
}

startApp()

