import express, { Request, Response } from "express";
import morgan from "morgan";

import { projectRouter } from "./routes/project.route";
import { emailRouter } from "./routes/mail.route";

import {connectDb} from './config/connectDb'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/projects', projectRouter)
app.use('/api/mail', emailRouter)

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json("Server working");
});


const startApp = async() => {
  try {
      const uri = process.env.MONGO_URI;

      if (!uri) {
        throw new Error("MONGO_URI is not defined");
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

