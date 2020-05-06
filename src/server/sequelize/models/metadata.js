const Sequalize = require("sequelize");
const seqlInstance = require("../../database/connection");

/* Metadata Table schema */
module.exports = seqlInstance.define(
  "metadata",
  {
    id: {
      type: Sequalize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    deezerid: {
      type: Sequalize.INTEGER,
    },
    song_title: {
      type: Sequalize.STRING(200),
    },
    preview: {
      type: Sequalize.STRING(300),
    },
    artist_name: {
      type: Sequalize.STRING(100),
    },
    artist_image: {
      type: Sequalize.STRING(200),
    },
    album_name: {
      type: Sequalize.STRING(200),
    },
    album_image: {
      type: Sequalize.STRING(300),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
