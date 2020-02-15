const GooglePeopleApiStrat = require("passport-google-token").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const passport = require("passport");
const UserModel = require("./sequelize/models/user");
const JWT_SECRET = require("./config");

// JSON WEB TOKENS STRATEGY
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        // Find the user specified in token
        console.log("payloadtest", payload.sub);
        const user = await UserModel.findOne({
          where: { googleID: payload.sub.googleID }
        });

        // If user doesn't exists, handle it
        if (!user) {
          console.log("no user");
          return done(null, false);
        }

        // Otherwise, return the user
        console.log("return user");
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
//Google OAuth Passport Strategy
passport.use(
  "googleToken",
  new GooglePeopleApiStrat(
    {
      clientID:
        "253538920754-1qb2i7mgbmk0s2p7dhu1bg3g7hncpep1.apps.googleusercontent.com",
      clientSecret: "M3BraSEdsb-SMG194lMJi2Kn"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await UserModel.findOne({
          where: { googleID: profile.id }
        });

        //Check if user exists
        if (existingUser) {
          console.log("User already present in DB");
          console.log("accessToken", accessToken);
          console.log("refreshToken", refreshToken);
          console.log("profile", profile);
          return done(null, existingUser);
        }

        console.log("User does not exist in DB, creating a new one");
        //Create New User since google ID doesn't exist
        const newUser = await UserModel.create({
          googleID: profile.id,
          Nickname: profile.displayName,
          UserImageLink: profile._json.picture
        });

        console.log("newuser", newUser);
        return done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
