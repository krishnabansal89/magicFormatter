import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const configureGoogleStrategy = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/callback/google",
      },
      async (accessToken, refreshToken, profile, done) => {
        // Create or find user in DB
        const user = {
          id: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
        };

        let token;

        const existingUser = await UserModel.findOne({ email: user.email });
        if (existingUser) {
          token = jwt.sign(
            { email: user.email , name: user.name , plan: existingUser.plan , createdAt: existingUser.createdAt , activeDocument: existingUser.queries.length},
            process.env.JWT_SECRET as string
          );
          return done(null, { existingUser, token });
        }

        const newUser = new UserModel({
          email: user.email,
          name: user.name,
        });

        await newUser.save();


        token = jwt.sign(
          { email: user.email , name: user.name , plan: newUser.plan},
          process.env.JWT_SECRET as string
        );

        return done(null, { user, token });
      }
    )
  );
};

export default configureGoogleStrategy;