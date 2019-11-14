const express = require("express");
const apiRouter = require("./Routes");

const app = express();
const port = 3001;

app.use("/api/", apiRouter);

app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () =>
  console.log(`Test API server listening on port ${port}`)
);
