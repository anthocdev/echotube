const PlaylistModel = require("../sequelize/models/playlist");
const VideoModel = require("../sequelize/models/video");
const PlaylistVideoModel = require("../sequelize/models/playlistVideo");

VideoModel.belongsToMany(PlaylistModel, {
  through: PlaylistVideoModel,
  foreignKey: "videos_videoID"
});
PlaylistModel.belongsToMany(VideoModel, {
  through: PlaylistVideoModel,
  foreignKey: "playlists_PlaylistID"
});

module.exports = {
  addVideo: async (req, res, next) => {
    console.log("Add video method called.");
    console.log(req.body.params);

    /* REQ.BODY.PARAMS contains all data */
    /* Check if Video Already exists in DB*/

    /* If not create new record in video table*/

    /* Update Playlist Association PlaylistID : PlaylistVideoID : VideoID */
  },
  removeVideo: async (req, res, next) => {
    console.log("Remove video method called");
    /* Match Playlist ID : VideoID Values */

    /* Drop Record from the association table */
  },
  //Need to implement additional security measures for private playlists (Match User GoogleID with playlist owner prior to responding)
  getVideos: async (req, res, next) => {
    console.log("Get videos method called");
    PlaylistModel.findOne({
      where: { PlaylistID: req.param("PlaylistID") },
      include: [VideoModel]
    }).then(value => {
      if (value) {
        res.json(value);
      } else {
        res.sendStatus(404);
      }
    });
  }
};
