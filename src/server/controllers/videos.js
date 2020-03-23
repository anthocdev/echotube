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
    const { PlaylistID, data } = req.body.params;

    console.log("PlaylistID", PlaylistID);
    console.log("Video ID", data.id);
    /* REQ.BODY.PARAMS contains all data */
    /* Check if Video Already exists in DB*/
    try {
      VideoModel.findOne({
        where: { VideoLink: data.id }
      }).then(video => {
        if (video) {
          console.log("EXISTS");
        } else {
          //If Video is new
          console.log("Does not exist");
          //Execute as a single promise (ensure that video is not only stored into DB, but also linked to relevant playlist afterwards)
          Promise.all(
            VideoModel.create({
              Name: data.snippet.title,
              Description: data.snippet.description,
              ChannelName: data.snippet.channelTitle,
              ChannelID: data.snippet.channelId,
              VideoLink: data.id
            }).then(video =>
              PlaylistVideoModel.create({
                playlists_PlaylistID: PlaylistID,
                videos_VideoID: video.VideoID
              })
            )
          )
            .then(function(arrayOfValuesOrErrors) {
              console.log(arrayOfValuesOrErrors);
            })
            .catch(function(err) {
              console.log(err.message);
            });
        }
      });
    } catch (err) {
      console.log("Video POST error: ", err);
    }
  },
  removeVideo: async (req, res, next) => {
    console.log("Remove video method called");
    // Req Params expected vals: VideoID & PlaylistID
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
