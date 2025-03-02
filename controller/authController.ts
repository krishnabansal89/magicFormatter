import { Request, Response, NextFunction } from "express";
import passport from "passport";

const authController = {
  initiateGoogleAuth: (req: Request, res: Response) => {
    const params = new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      redirect_uri: `${process.env.BACKEND_URL}/auth/callback/google`,
      response_type: "code",
      scope: "profile email",
      access_type: "offline",
    });

    res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
  },

  handleGoogleCallback: (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "google",
      { session: false, failureRedirect: "/login" },
      (err: any, data: { token: string; user: any }) => {
        if (err || !data?.token) {
          return res.redirect("/login?error=auth_failed");
        }

        // Successful authentication
        res.redirect(`${process.env.FRONTEND_URL}/login/callback?token=${data.token}`);
      }
    )(req, res, next);
  },
};

export default authController;
