const UserModel = require("../sequelize/models/user");
const PlaylistModel = require("../sequelize/models/playlist");

UserModel.hasMany(PlaylistModel, {
  foreignKey: "users_UserID",
});

PlaylistModel.belongsTo(UserModel, {
  foreignKey: "users_UserID",
});

module.exports = {
  addPlaylist: async (req, res, next) => {
    console.log("Create playlist method called.");
    //#1 Verify User ID against GoogleID Before Creation of Playlist
    //#2 Create playlist using identified UserID & received data

    UserID = req.user.UserID;
    PlaylistName = req.body.params.data.PlaylistName;
    PlaylistImageLink = req.body.params.data.PlaylistImageLink;
    try {
      if (UserID) {
        PlaylistModel.create({
          Name: PlaylistName,
          users_UserID: UserID,
          PlaylistImageLink: PlaylistImageLink,
        }).then((result) => res.json(result));
      } else {
        res.sendStatus(404);
      }
    } catch (e) {
      res.sendStatus(404);
    }
  },
  updatePlaylist: async (req, res, next) => {
    console.log("Update playlist method called");

    UserID = req.user.UserID;
    PlaylistID = req.body.params.data.PlaylistID;
    PlaylistName = req.body.params.data.PlaylistName;
    PlaylistImageLink = req.body.params.data.PlaylistImageLink;
    try {
      PlaylistModel.findOne({
        where: { PlaylistID: PlaylistID },
      }).then((value) => {
        //Ensuring that user is definitely editing his own playlist
        if (value.users_UserID == UserID) {
          PlaylistModel.update(
            { Name: PlaylistName, PlaylistImageLink: PlaylistImageLink },
            { where: { PlaylistID: PlaylistID } }
          );
          res.sendStatus(200);
        } else {
          res.sendStatus(403); //Forbidden
        }
      });
    } catch (e) {
      res.sendStatus(404);
    }
  },
  removePlaylist: async (req, res, next) => {
    console.log("Remove playlist method called");

    UserID = req.user.UserID;
    delPlaylistID = req.body.id;
    console.log("PARAMS FOR DELETE", req.body.id);
    //Delete playlist
    try {
      PlaylistModel.destroy({
        where: {
          PlaylistID: delPlaylistID,
          users_UserID: UserID,
        },
      }).then((response) => res.json(response));
    } catch (err) {
      res.sendStatus(404);
    }
  },
  //Returns playlists of JWT_Token owner
  getPlaylists: async (req, res, next) => {
    console.log("Get playlists method called");
    console.log(req.body);
    try {
      UserModel.findOne({
        where: { googleID: req.user.googleID },
        attributes: ["Nickname"],
        include: [PlaylistModel],
      }).then((value) => {
        if (value) {
          res.json(value);
        } else {
          res.sendStatus(404);
        }
      });
    } catch (e) {
      res.sendStatus(404);
    }
  },
};
