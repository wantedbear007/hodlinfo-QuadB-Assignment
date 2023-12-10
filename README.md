# Assignment for NodeJS Developer

This project is designed as a NodeJS application that interfaces with a cryptocurrency database. It includes endpoints for checking server status, fetching cryptocurrency prices, and updating prices in the database.

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed.
- XAMPP or similar local server environment for database management.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the cloned directory.
3. Add the `crypto.sql` file from the `databaseFile` directory to your local database using XAMPP or a similar tool.
4. Rename `.env.example` to `.env` and update the `DB_USER` and `DB_PASSWORD` fields with your database credentials.
5. Install the required packages using `npm install` or `yarn install`.
6. Start the Node.js server with `npm start`.

## API Endpoints

### 1. Check Server Status

- **Method**: GET
- **Endpoint**: `http://127.0.0.1:3000/api/v1/status`
- **Response**:
  ```json
  {
      "status": "Active",
      "author": "@wantedbear007",
      "date": 1702194647079
  }

### 2. Check Prices of Cryptocurrencies

- **Method**: GET
- **Endpoint**: `http://127.0.0.1:3000/api/v1/prices`
- **Response**:
  ```json
  [
      {
          "id": 1,
          "name": "BTC/INR",
          "last": 3792763,
          "buy": 3792763,
          "sell": 3800339,
          "volume": 2.84,
          "base_unit": "btc",
          "timestamp": "2023-12-10T07:44:30.000Z"
      },
      // Additional cryptocurrency data...
  ]
### 3. Update Prices from API to Database

- **Method**: POST
- **Endpoint**: `http://127.0.0.1:3000/api/v1/updateprices`
- **Body**:
  ```json
  { "key": "12212215" }
- **Response**:
  ```json
  [
     {
        "message": "Prices updated successfully"
     }  
  ]

