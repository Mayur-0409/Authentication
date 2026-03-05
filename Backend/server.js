import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Database/db.js";
import authRoutes from "./Routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
const Port = process.env.PORT;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
}

app.listen(Port, () => {
  connectDb();
  console.log(`Server is running on port: ${Port}`);
});
