const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const DatabaseConnection = require("./res/connection.js");
const Handlers = require("./res/Handlers.js");
const cors = require("cors")
const Utils = require("./utils/utils.js");

app.use(cors())

const port = 3000;
const baseUrl = "/api/v1";
console.log("server started !");

const database = new DatabaseConnection();
database.establishConnection();

// app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
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

app.get(baseUrl + "/prices", async (req, res) => {
  try {
    const dbResponse = await database.userQuery("select * from prices");
    res.status(200).send(dbResponse);
  } catch (err) {
    res.status(500).send("Internal server error.");
  }
});

app.post(baseUrl + "/data", (req, res) => {
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
