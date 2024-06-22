const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Health check");
});

app.listen(PORT, () => {
  try {
    console.log(`Connected to Server at Port ${PORT}`);
  } catch (error) {
    console.log("Something went wrong");
  }
});
