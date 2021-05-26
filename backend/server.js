const express = require("express");
const connectDB = require("./connection");
const router = require("./routes");
var cors = require("cors");

require("dotenv").config;
connectDB();

const app = express();

app.use("/api/events", router);
app.use(express.json());
app.use(cors());

//if (process.env.NODE_ENV === "production") {
if (true) {
  // static folder
  app.use(express.static(__dirname + "/public/"));

  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
