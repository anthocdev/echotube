const axios = require("axios");
//Making deezer requests, no key needed
module.exports = {
  searchQuery: async (req, res, next) => {
    const GET_VIDEO = `https://api.deezer.com/search?q=${req.param(
      "videoTitle"
    )}`; //Search Query Link

    axios
      .get(GET_VIDEO)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
    console.log("Deezer search request made.");
  },
};
