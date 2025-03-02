import { Router } from "express";
import authController from "../controller/authController";
import configureGoogleStrategy from "../utils/authStratergy";
// Initialize strategies
configureGoogleStrategy();

const authRouter = Router();

authRouter.get("/google", authController.initiateGoogleAuth);
authRouter.get("/callback/google", authController.handleGoogleCallback);

export default authRouter;
