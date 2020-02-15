const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* Playlist Table schema */
module.exports = seqlInstance.define(
  "Playlist",
  {
    PlaylistID: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequalize.STRING(45)
    },
    users_UserID: {
      type: Sequalize.INTEGER
    },
    PlaylistImageLink: {
      type: Sequalize.STRING(300)
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
