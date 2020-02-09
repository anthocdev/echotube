const UserModel = require("../sequelize/models/user");
const PlaylistModel = require("../sequelize/models/playlist");

UserModel.hasMany(PlaylistModel, {
  foreignKey: "users_UserID"
});

PlaylistModel.belongsTo(UserModel, {
  foreignKey: "users_UserID"
});

module.exports = {
  addPlaylist: async (req, res, next) => {
    console.log("Add playlist method called.");
  },
  removePlaylist: async (req, res, next) => {
    console.log("Remove playlist method called");
  },
  getPlaylists: async (req, res, next) => {
    console.log("Get playlists method called");
    console.log(req.body);
    UserModel.findOne({
      where: { googleID: "110972891602083952811" },
      include: [PlaylistModel]
    }).then(value => {
      if (value) {
        res.json(value);
      } else {
        res.sendStatus(404);
      }
    });
  }
};
