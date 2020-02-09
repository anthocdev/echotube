const JWT = require("jsonwebtoken");
const JWT_SECRET = require("../config");

signToken = user => {
  return JWT.sign(
    {
      iss: "Anthodev",
      sub: user,
      iat: new Date().getTime(), //Current Time
      exp: new Date().setDate(new Date().getDate() + 1) //Current Time + 1 Day
    },
    JWT_SECRET
  );
};

module.exports = {
  signUp: async (req, res, next) => {
    console.log("signUp() called");
  },

  signIn: async (req, res, next) => {
    console.log("signIn() called");
  },

  //Testing secret resource using JWT token
  secret: async (req, res, next) => {
    console.log("secret() called");
    res.json({ secret: "resource" });
  },

  googleOAuth: async (req, res, next) => {
    // Generate Token containing google ID for verification
    console.log("req.user", req.user.dataValues.googleID);
    const token = signToken(req.user.dataValues.googleID);
    res.status(200).json({ token });
  }
};
