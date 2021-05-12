const express = require("express");
const connectDB = require("../backend/connection");
const userRouter = require("../backend/API");
const user = require("./Models/User");
var bodyParser = require("body-parser");

require("dotenv").config;

connectDB();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/Models/event", userRouter);
app.use(express.json());

app.get("/", function (req, res) {
  //Show all users
  console.log("Hello");
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/add", function (req, res) {
  //Add a new user
  console.log(req);
  const username = req.body.username;

  const newUser = new user({ username });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
