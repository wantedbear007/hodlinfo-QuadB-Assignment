class Utils {
  static createTableQuery = `
    CREATE TABLE IF NOT EXISTS prices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        last DECIMAL(10,2) NOT NULL,
        buy DECIMAL(10,2) NOT NULL,
        sell DECIMAL(10,2) NOT NULL,
        volume DECIMAL(10,2) NOT NULL,
        base_unit VARCHAR(10) NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
`;

  static deleteRowsQuery = `
            DELETE FROM prices;
        `;

  static dropTablesQuery = `
        DROP TABLE IF EXISTS prices;
`;

  static baseUrl = "https://api.wazirx.com/api/v2/tickers";

  static apiKey = "12212215";
}

module.exports = Utils;
