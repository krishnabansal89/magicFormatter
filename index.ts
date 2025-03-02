import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./utils/db";
import UserRouter from "./routes/userRoutes";
import configRouter from "./routes/configRouter";
import authRouter from "./routes/authRouter";
import passport from "passport";
import "./utils/authStratergy";

try {
  // Load .env file only if dotenv is installed
  const dotenv = require("dotenv");
  dotenv.config({ path: ".env" });
} catch (error) {
  // Silently fail in production (Azure handles env vars)
  console.error("No .env file found ");
}

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(passport.initialize());
app.use(
  cors ({
    origin: "*",
    credentials: true,
  })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "10mb",
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "10mb",
  })
);

db();



// Protected profile route






app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

app.use("/user", UserRouter);
app.use("/config", configRouter);
app.use("/auth", authRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
