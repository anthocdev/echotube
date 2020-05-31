module.exports = {
  testMethod: async (req, res, next) => {
    console.log(req.body.params);
    const { data } = req.body.params;
    console.log(data.snippet.title);
    console.log(data.snippet.description);
    console.log(data.snippet.channelTitle);
    console.log(data.snippet.channelId);
    console.log(data.id);
    res.sendStatus(200);
  },
};
