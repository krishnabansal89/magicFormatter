import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import jwt from "jsonwebtoken";
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const isGoogleAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token;
  if (!token) {
    res.status(401).send("Unauthorized");
  }
  const decoded = jwt.verify(token as string, process.env.JWT_SECRET);
  const userEmail = (decoded as any).userEmail;

  const user = UserModel.findOne({
    email: userEmail,
  });
  if (!user) {
    res.status(401).send("User Not Found");
  }

  next();
};
