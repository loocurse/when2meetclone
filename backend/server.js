const express = require("express");
const connectDB = require("./connection");
const router = require("./routes");
var cors = require("cors");

require("dotenv").config();
connectDB(process.env.MONGO_DB_URI);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/events", router);

//if (process.env.NODE_ENV === "production") {
if (true) {
  // static folder
  app.use(express.static(__dirname + "/public/"));

  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`[WHEN2MEETCLONE]: Listening to port ${port}`));
