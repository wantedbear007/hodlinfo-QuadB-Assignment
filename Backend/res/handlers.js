const axios = require("axios");
const Utils = require("../utils/utils");

class Handlers {
  constructor() {
    this.baseUrl = Utils.baseUrl;
  }

  // fetch crypto prices
  fetchPrices = async () => {
    try {
      const res = await axios.get(this.baseUrl);
      if (res.status == 200) {
        const top10s = Object.entries(res.data)
          .slice(0, 10)
          .reduce((result, [key, value]) => {
            result[key] = value;
            return result;
          }, {});

        return top10s;
      }
      console.log("error occurred ");
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // to upload data in mysql database
  updatePrices = async (database) => {
    const res = await this.fetchPrices();

    await database.userQuery(Utils.dropTablesQuery);
    await database.userQuery(Utils.createTableQuery);

    for (const key in res) {
      const { name, last, buy, sell, volume, base_unit } = res[key];
      const insertQuery = `
      INSERT INTO prices (name, last, buy, sell, volume, base_unit)
      VALUES ('${name}', ${last}, ${buy}, ${sell}, ${volume}, '${base_unit}');`;

      await database.userQuery(insertQuery);
    }
  };
}

module.exports = Handlers;
