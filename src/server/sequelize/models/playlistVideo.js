const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* Playlist Video Table schema */
module.exports = seqlInstance.define(
  "playlistvideo",
  {
    PlaylistVideoID: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    playlists_PlaylistID: {
      type: Sequalize.INTEGER,
    },
    videos_VideoID: {
      type: Sequalize.INTEGER,
    },
    metadata_id: {
      type: Sequalize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
