const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./Routes");

const app = express();
const port = 3001;
//General set-up for express server

//DB Connection
require("./database/connection");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //CORS Allowed Domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});
app.use(bodyParser.json());
app.use("/api/", apiRouter);

app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () =>
  console.log(`Test API server listening on port ${port}`)
);
