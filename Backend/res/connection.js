const mysql = require("mysql");

// establish mysql connection
const estConnection = () => {
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

    return conn;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = estConnection;
