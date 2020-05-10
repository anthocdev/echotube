const MetadataModel = require("../sequelize/models/metadata");
const PlaylistVideoModel = require("../sequelize/models/playlistVideo");

PlaylistVideoModel.belongsTo(MetadataModel, {
  foreignKey: "metadata_id",
});

module.exports = {
  /* Returns song metadata by id */
  getMetadata: async (req, res, next) => {
    console.log("Get metadata method called");
    PlaylistVideoModel.findOne({
      where: { PlaylistVideoID: req.param("PlaylistVideoID") },
      include: [MetadataModel],
    }).then((value) => {
      if (value) {
        res.json(value);
      } else {
        res.sendStatus(404);
      }
    });
  },

  /* Adds new metadata item */
  addMetadata: async (req, res, next) => {
    console.log("Add metadata called.");
    console.log(req.body.params);
    const { PlaylistVideoID, data } = req.body.params;

    console.log("PlaylistVideoID", PlaylistVideoID);
    console.log("Video ID", data.deezerid);
    /* REQ.BODY.PARAMS contains all data */
    /* Executes as a single promise, ensuring that metadata is linked to the video after it is created*/
    try {
      Promise.all(
        MetadataModel.create({
          deezerid: data.id,
          song_title: data.title,
          preview: data.preview,
          artist_name: data.artist.name,
          artist_image: data.artist.picture_medium,
          album_name: data.album.title,
          album_image: data.album.cover_medium,
        }).then((metadata) =>
          PlaylistVideoModel.update(
            {
              metadata_id: metadata.id,
            },
            { where: { PlaylistVideoID: PlaylistVideoID } }
          )
        )
      )
        .then(function (arrayOfValuesOrErrors) {
          console.log(arrayOfValuesOrErrors);
          res.sendStatus(200);
        })
        .catch(function (err) {
          console.log(err.message);
          res.sendStatus(200);
        });
    } catch (err) {
      console.log("Metadata POST error: ", err);
      res.status(404).send(err);
    }
  },
};
