const mysql = require("mysql");
const dbConfig = require("./Config/dbConfig");

const pool = mysql.createPool(dbConfig); //Read in database configuration to define mysql pool

let echodb = {};

/* #region GET Methods */

//Query all users in database (Prototyping/Testing purposes)
echodb.allUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

//Query for user details by their user ID
echodb.oneUser = id => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users WHERE UserID = ?", id, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

//Query for all user created playlists by their user ID
echodb.playlistByUserId = id => {
  return new Promise((resolve, reject) => {
    pool.query(
      "Select P.* FROM playlist P WHERE P.users_UserID = ?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Query for information about all videos within playlist by the playlist ID
echodb.playlistById = id => {
  return new Promise((resolve, reject) => {
    pool.query(
      "Select V.*" +
        "FROM playlistvideo PV " +
        "LEFT JOIN videos V on V.VideoID = PV.videos_VideoID " +
        "INNER JOIN playlist P on P.PlaylistID = PV.playlists_PlaylistID " +
        "WHERE P.PlaylistID = ?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

//Query for video information using video ID
echodb.videoById = id => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT V.* FROM videos V WHERE V.VideoID = ?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};
/* #endregion */

module.exports = echodb;
