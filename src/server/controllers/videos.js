const PlaylistModel = require("../sequelize/models/playlist");
const VideoModel = require("../sequelize/models/video");
const PlaylistVideoModel = require("../sequelize/models/playlistVideo");

VideoModel.belongsToMany(PlaylistModel, {
  through: PlaylistVideoModel,
  foreignKey: "videos_videoID",
});
PlaylistModel.belongsToMany(VideoModel, {
  through: PlaylistVideoModel,
  foreignKey: "playlists_PlaylistID",
});

PlaylistVideoModel.belongsTo(PlaylistModel, {
  foreignKey: "playlists_PlaylistID",
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
        where: { VideoLink: data.id },
      }).then((video) => {
        if (video) {
          //Video information already stored, only need to link it with the playlist
          PlaylistVideoModel.create({
            playlists_PlaylistID: PlaylistID,
            videos_VideoID: video.VideoID,
          });
          return res.status(200).send("Video added to playlist");
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
              VideoLink: data.id,
            })
              .then((video) =>
                PlaylistVideoModel.create({
                  playlists_PlaylistID: PlaylistID,
                  videos_VideoID: video.VideoID,
                })
              )
              .then(() => {
                return res.status(200).send("Video added to playlist");
              })
          )
            .then(function (arrayOfValuesOrErrors) {
              return res.status(200).send("Video added to playlist");
            })
            .catch(function (err) {
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
    UserID = req.user.UserID;
    delPlaylistVideoID = req.body.id;
    try {
      PlaylistVideoModel.findOne({
        where: { PlaylistVideoID: delPlaylistVideoID },
        include: [PlaylistModel],
      }).then((data) => {
        //Security measure to ensure decoded JWT token contains matching user ID
        if (data.Playlist.users_UserID == UserID) {
          PlaylistVideoModel.destroy({
            where: { PlaylistVideoID: delPlaylistVideoID },
          }).then((respo) => {
            if (respo) {
              return res.status(200).send("Video Successfully Removed");
            }
          });
        } else {
          return res
            .status(403)
            .send("Unauthorized user trying to access resource.");
        }
      });
    } catch (e) {
      return res.status(404).send(e);
    }
    // Clears The relevant PlaylistVideoID (Connection between a playlist and a video)
    // This approach ensures that details of the video itself is not removed from database and can be reused in the future
  },
  //Need to implement additional security measures for private playlists (Match User GoogleID with playlist owner prior to responding)
  getVideos: async (req, res, next) => {
    console.log("Get videos method called");
    try {
      PlaylistModel.findOne({
        where: { PlaylistID: req.param("PlaylistID") },
        include: [VideoModel],
      }).then((value) => {
        if (value) {
          res.json(value);
        } else {
          res.sendStatus(404);
        }
      });
    } catch (e) {
      res.status(404).send(e);
    }
  },
};
