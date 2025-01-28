import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { db } from "./utils/db";

const app: Express = express();
const port = process.env.PORT || 3000;

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

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

app.use("/user", require("./routes/user"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
