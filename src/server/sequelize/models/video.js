const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* Video Table schema */
module.exports = seqlInstance.define(
  "Video",
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
      type: Sequalize.STRING(100)
    }
  },
  {
    timestamps: false
  }
);
