import e, { Request, Response } from "express";
import morgan from "morgan";

import { projectRouter } from "./routes/project.route";

import {connectDb} from './config/connectDb'

const app = e();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(e.json());
app.use(e.urlencoded({ extended: true }))

app.use('/api/projects', projectRouter)

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

