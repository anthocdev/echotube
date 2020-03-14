const axios = require("axios");
const API_KEY = `AIzaSyB2yKogm2aT-hE-wd-AYqUXezzXcHCCKXs`;

module.exports = {
  getVideo: async (req, res, next) => {
    const GET_VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${req.param(
      "videoId"
    )}&key=${API_KEY}`; //Video Request Link

    axios
      .get(GET_VIDEO)
      .then(response => {
        res.json(response.data);
      })
      .catch(err => {
        console.log("error", err);
      });
    console.log("Youtube Video Request Made.");
  },
  getPlaylist: async (req, res, next) => {
    console.log("Youtube Playlist Request Made.");
  }
};
