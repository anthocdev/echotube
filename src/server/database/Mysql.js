const mysql = require("mysql");

// Get the Host from Environment or use default
const host = process.env.DB_HOST || "localhost";

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || "root";

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || "";

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || "echotube";

// Create the connection with required details
const con = mysql.createConnection({
  host,
  user,
  password,
  database
});

const query = "SELECT * FROM users";

const query2 = "SELECT * FROM videos";

const username = "'TestUser'";

const getVideos =
  "SELECT V.Name, U.Nickname FROM videos V INNER JOIN playlistVideo PV on V.VideoID = PV.videos_VideoID LEFT JOIN playlist P on PlaylistID = PV.playlists_PlaylistID LEFT JOIN users U on U.UserID = P.users_UserID WHERE U.Nickname = " +
  username;
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;

  // if connection is successful
  con.query(query, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
  });

  con.query(getVideos, (err, result, fields) => {
    if (err) throw err;

    console.log(result);
  });
});
