const mysql = require("mysql");

// establish mysql connection

class DatabaseConnection {
  // to establish connection
  establishConnection = () => {
    try {
      var conn = mysql.createConnection({
        host: "localhost",
        user: "wanted",
        password: "wanted",
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
            console.log(result);
            // console.log(fields)
            resolve(result);
            // return result;
          } else {
            console.log(err);
            reject(err);
            // return false;
          }
        });
      } catch (err) {
        console.log(err);
        reject(err);
        // return false;
      }
    });
    // try {
    //   this.conn.query(q, function(err, result, fields) {
    //     if (!err) {
    //       console.log(result)
    //       // console.log(fields)
    //       return result;
    //     } else {
    //       console.log(err);
    //       return false;
    //     }
    //   })
    // } catch (err) {
    //   console.log(err);
    //   return false;
    // }
  };
}

module.exports = DatabaseConnection;
