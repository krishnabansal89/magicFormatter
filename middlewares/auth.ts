import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const userEmail = req.headers.email;
  const user = UserModel.findOne({
    email: userEmail,
  });
  if (!user) {
    res.status(401).send("Unauthorized");
  }
  console.log("Auth middleware");
  next();
};
