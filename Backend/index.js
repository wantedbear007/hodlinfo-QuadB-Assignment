const mysql = require("mysql");
const axios = require("axios");
const connection = require("./res/connection.js");
const handler = require("./res/Handlers.js");

console.log("server started !");

connection()
const lol = async () => {
    const hand = await handler();
    console.log(Object.keys(hand))
}

lol()

// console.log(lol.connect())
// const estConnection = () => {
//   try {
//     var conn = mysql.createConnection({
//       host: "localhost",
//       user: "wanted",
//       password: "wanted",
//     });

//     conn.connect(function (err) {
//       if (err) throw err;
//       console.log("connected to mysql");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetch crypto data from api
// const baseUrl = "https://api.wazirx.com/api/v2/tickers";
// const fetchData = async () => {
//   try {
//     const res = await axios.get(baseUrl);

//     if (res.status == 200) {
//       const top10s = Object.entries(res.data)
//         .slice(0, 10)
//         .reduce((result, [key, value]) => {
//           result[key] = value;
//           return result;
//         }, {});
//       console.log(top10s);

//       console.log("data fetching success !");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fetchData();

// estConnection();
