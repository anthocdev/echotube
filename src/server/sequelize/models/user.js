const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* User Table schema */
module.exports = seqlInstance.define(
  "User",
  {
    UserID: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nickname: {
      type: Sequalize.STRING(100)
    },
    UserImageLink: {
      type: Sequalize.STRING(300)
    },
    googleID: {
      type: Sequalize.STRING(45)
    }
  },
  {
    timestamps: false
  }
);
