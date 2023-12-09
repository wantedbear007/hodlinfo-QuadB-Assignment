const axios = require("axios");

class Handlers {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
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
}

// const fetchPrices = async () => {
//   try {
//     const res = await axios.get(baseUrl);
//     if (res.status == 200) {
//       const top10s = Object.entries(res.data)
//         .slice(0, 10)
//         .reduce((result, [key, value]) => {
//           result[key] = value;
//           return result;
//         }, {});

//       return top10s;
//     }
//     console.log("error occurred ");
//     return false;
//   } catch (err) {
//     console.log(err);
//     return false;
//   }
// };

module.exports = Handlers;
