// db.js
require("dotenv").config({
  path: "/Users/myarose/fullstack-capstone-project/.env",
});
const MongoClient = require("mongodb").MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  const client = new MongoClient(url);

  // Task 1: Connect to MongoDB

  try {
    //  Connect to the MongoDB client
    await client.connect();
    console.log("Connected successfully to server");

    // Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);

    // Return database instance
    return dbInstance;
  } catch (e) {
    console.error(e);
  }
}

module.exports = connectToDatabase;
