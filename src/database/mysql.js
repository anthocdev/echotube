const mysql = require('mysql');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'ayylmao420';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'testing';

// Create the connection with required details
const con = mysql.createConnection({
  host, user, password, database,
});

const query = "SELECT * FROM main";
 
const query2 = "SELECT * FROM main WHERE name='Thomas'"

const query3 = "SELECT * FROM main WHERE age>25"
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;

  // if connection is successful
  con.query(query3, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
 });


});