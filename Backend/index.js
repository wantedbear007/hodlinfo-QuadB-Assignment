const connection = require("./res/connection.js");
const Handlers = require("./res/Handlers.js");

console.log("server started !");

// api endpoint
const baseUrl = "https://api.wazirx.com/api/v2/tickers";

// establishing connection
connection();

const handler = new Handlers(baseUrl);
const lol = async () => {
  const res = await handler.fetchPrices();
  const resKeys = Object.keys(res);

  resKeys.forEach((key) => {
    console.log(key);
  });
};

lol();

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
