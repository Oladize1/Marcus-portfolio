import e, { Request, Response } from "express";
import morgan from "morgan";

import {connectDb} from './config/connectDb'

const app = e();
const PORT = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(e.json());

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json("Server working");
});


const startApp = async() => {
  try {
      await connectDb(process.env.MONGO_URI)
      app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
      });
  } catch (error) {
    throw new Error(error)
  }
}

startApp()

