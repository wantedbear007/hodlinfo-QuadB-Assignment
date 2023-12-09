const DatabaseConnection = require("./res/connection.js");
const Handlers = require("./res/Handlers.js");

console.log("server started !");


const database = new DatabaseConnection();
const handler = new Handlers();

database.establishConnection();
handler.updatePrices(database)

