const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const DatabaseConnection = require("./res/connection.js");
const Handlers = require("./res/Handlers.js");
const cors = require("cors");
const Utils = require("./utils/utils.js");
require("dotenv").config();


app.use(cors());

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;




const port = 3000;
const baseUrl = "/api/v1";
console.log("server started !");

const database = new DatabaseConnection();
database.establishConnection();

// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.status(404).send({ message: "Not Found" });
// });

// to check API status
app.get("/api/v1/status", (req, res) => {
  const resObj = {
    status: "Active",
    author: "@wantedbear007",
    date: Date.now(),
  };
  try {
    res.status(200).send(resObj);
  } catch (err) {
    res.status(500).send("Internal server error.");
  }
});

// to get prices
app.get(baseUrl + "/prices", async (req, res) => {
  try {
    const dbResponse = await database.userQuery("select * from prices");
    res.status(200).send(dbResponse);
  } catch (err) {
    res.status(500).send("Internal server error.");
  }
});

// to update prices
app.post(baseUrl + "/updateprices", (req, res) => {
  try {
    const body = req.body["key"];
    if (body != Utils.apiKey) {
      throw err;
    }
    const handler = new Handlers();

    handler.updatePrices(database);
    res.status(200).send({ message: "Prices updated successfully" });
  } catch (err) {
    res.status(401).send({ message: "Unauthorized, Invalid APIkey." });
  }
});

app.listen(port, () => {
  console.log(`server https://localhost:${port}`);
});
