const axios = require("axios");

const baseUrl = "https://api.wazirx.com/api/v2/tickers";

const handlers = async () => {
  try {
    const res = await axios.get(baseUrl);
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

module.exports = handlers;
