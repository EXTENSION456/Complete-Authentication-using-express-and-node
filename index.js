import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDb } from "./connectDb.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

//connection with db
connectDb(process.env.MONGO_URI)
  .then(function () {
    console.log("connected with db");
  })
  .catch(function (err) {
    console.log("not connected with db", err);
  });

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, function () {
  console.log("Listening on the port", process.env.PORT);
});
