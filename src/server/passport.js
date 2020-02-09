const GooglePeopleApiStrat = require("passport-google-token").Strategy;
const passport = require("passport");

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
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);

      //Check if user exists in DB

      //If new account
    }
  )
);
