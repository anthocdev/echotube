var express = require("express");
const db = require("./database");

var router = express.Router();

/* GET ROUTES */

router.get("/test/", async (req, res, next) => {
  res.json("Welcome to EchoTube API, this is a test json return function.");
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

/* POST ROUTES */

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
