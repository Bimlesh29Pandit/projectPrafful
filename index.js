const express = require("express");
const dotenv = require("dotenv");
const connection  = require("./config/db");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Health check");
});

app.listen(PORT, async() => {
  try {
    await connection;
    console.log(`Connected to Server at Port ${PORT} and connected to DB`);
  } catch (error) {
    console.log("Something went wrong");
  }
});
