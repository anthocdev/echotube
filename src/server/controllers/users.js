module.exports = {
  signUp: async (req, res, next) => {
    console.log("signUp() called");
  },

  signIn: async (req, res, next) => {
    console.log("signIn() called");
  },

  secret: async (req, res, next) => {
    console.log("secret() called");
  }
};
