import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

import cors from "cors"; //cors helps to allow request from frontend to backend

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)

mongoose
  .connect(
    "mongodb+srv://admin-harshit:test123@cluster0.2b3tbjg.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(5000, (req, res) => {
      console.log("Connected with Mongodb-Atlas, listening at port: 5000");
    })
  ).catch((err)=>console.log(err));
