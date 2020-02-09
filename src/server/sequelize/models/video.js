const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* Video Table schema */
module.exports = seqlInstance.define(
  "Videos",
  {
    VideoID: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequalize.STRING(100)
    },
    Description: {
      type: Sequalize.STRING(5000)
    },
    ChannelName: {
      type: Sequalize.STRING(50)
    },
    ChannelID: {
      type: Sequalize.STRING(45)
    },
    VideoLink: {
      type: Sequalize.STRING(100),
      unique: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
