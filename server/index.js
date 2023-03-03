const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(cors());
const uri = process.env.URI

app.get("/", (req, res) => {
  res.send("hey hi");
});

app.get("/users", async (req,res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");

    const foundUsers = await users.find().toArray();
    res.send(foundUsers);
  } finally {
    client.close();
  }
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
