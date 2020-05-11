var express = require("express");
const db = require("./database");

const UsersController = require("./controllers/users");
const PlaylistController = require("./controllers/playlist");
const VideoController = require("./controllers/videos");
const YouTubeController = require("./controllers/youtube");
const DeezerController = require("./controllers/deezer");
const MetadataController = require("./controllers/metadata");
const MailerController = require("./controllers/mailer");
const passport = require("passport");
const passportConf = require("./passport");
const PassportGoogle = passport.authenticate("googleToken", { session: false });
const passportJWT = passport.authenticate("jwt", { session: false });
const UserModel = require("./sequelize/models/user");

var router = express.Router();

router.get("/test/", async (req, res, next) => {
  res.json("Welcome to EchoTube API, this is a test json return function.");
});

/* Auth Routes Start*/
router.route("/signup").post(UsersController.signUp);
router.route("/signin").post(UsersController.signIn);
router.route("/secret").post(passportJWT, UsersController.secret);
/* Google OAuth through Passport using access tokens */
router.route("/oauth/google").post(PassportGoogle, UsersController.googleOAuth);
/* Auth Routes End*/

/* User Routes */
router.route("/userInfo").get(passportJWT, UsersController.userInfo);

/* Playlist Routes */
router.route("/playlist").get(passportJWT, PlaylistController.getPlaylists);
router.route("/playlist").post(passportJWT, PlaylistController.addPlaylist);
router
  .route("/playlist")
  .delete(passportJWT, PlaylistController.removePlaylist);
router.route("/playlist").put(passportJWT, PlaylistController.updatePlaylist);
/* Playlist Routes End */

/* MetaData Routes */

router.route("/metadata").get(MetadataController.getMetadata);
router.route("/metadata").post(MetadataController.addMetadata);

/* MetaData Routes End */

/* Video Routes */
router.route("/video").post(passportJWT, VideoController.addVideo);
router.route("/video").delete(passportJWT, VideoController.removeVideo);
router.route("/video").get(VideoController.getVideos);
/* Video Routes End*/

/*Mailer Routes*/
router.route("/sendmail").post(MailerController.sendMail);
/*Mailer Routes End*/

/* YouTube API Call Routes */
router.route("/getVideo").get(passportJWT, YouTubeController.getVideo);
/* YouTube API Call Routes End */

/* Deezer API Call Routes */

/* Query does not require JWT confirmation since API Key is not needed */
router.route("/deezerQuery").get(DeezerController.searchQuery);

/* Deezer API Call Routes End */

//USER LIST USING SERIALIZE
router.get("/st/", async (req, res, next) => {
  UserModel.findAll()
    .then((users) => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

//Get list of users
router.get("/users/", async (req, res, next) => {
  try {
    let results = await db.allUsers();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Get user info by ID
router.get("/user/:id", async (req, res, next) => {
  try {
    let results = await db.oneUser(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Get playlists by user ID
router.get("/userPlaylist/:id", async (req, res, next) => {
  try {
    let results = await db.playlistByUserId(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Get videos by playlist ID
router.get("/Playlist/:id", async (req, res, next) => {
  try {
    let results = await db.playlistById(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Get video information by video ID
router.get("/Video/:id", async (req, res, next) => {
  try {
    let results = await db.videoById(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/*router.get("/api/test", async (req, rest) => {
  try {
    let test = await DB.test.all();
    res.json(test);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});*/

router.post("/Playlist/:id", async (req, res, next) => {
  try {
    let action = await db.postVideoToPlaylistId(req.params.id, req.body);
    res.json({ response: "SUCCESS" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
