const mysql = require("mysql");

class DatabaseConnection {
  // to establish connection
  establishConnection = () => {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    try {
      var conn = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: "crypto",
      });

      conn.connect(function (err) {
        if (err) throw err;
        console.log("connected to mysql");
      });
      this.conn = conn;
      return conn;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // to execute query
  userQuery = async (q) => {
    return new Promise((resolve, reject) => {
      try {
        this.conn.query(q, function (err, result, fields) {
          if (!err) {
            resolve(result);
            return result;
          } else {
            console.log(err);
            reject(err);
          }
        });
      } catch (err) {
        console.log(err);
        reject(err);
        // return false;
      }
    });
  };
}

module.exports = DatabaseConnection;
