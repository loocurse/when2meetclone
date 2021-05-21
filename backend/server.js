const express = require("express");
const connectDB = require("./connection");
// const userRouter = require("../backend/API");
const user = require("./models/Event");
var bodyParser = require("body-parser");
//const unix_converter = require("./utils");
const { IDGenerator, create_users_time_obj } = require("./utils.js");
var cors = require("cors");

require("dotenv").config;

connectDB();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use("/Models/event", userRouter);
app.use(express.json());
app.use(cors());

app.get("/events", function (req, res) {
  //Show all users
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/events/:id", function (req, res) {
  //Show 1st page events
  //Send back, list of dates of first page, user_time object filtered for first 7 days
  user
    .findById(req.params.id)
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/events/add", function (req, res) {
  //Add a new user
  const event_name = req.body.event_name;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const start_time = req.body.start_time;
  const end_time = req.body.end_time;
  const availability = create_users_time_obj(
    start_date,
    end_date,
    start_time,
    end_time
  );

  const newUser = new user({
    event_name,
    start_date,
    end_date,
    users: [],
    start_time,
    end_time,
    availability,
  });
  //Create users_time_object
  newUser
    .save()
    .then(() => res.json(newUser.id))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.put("/events/:id/adduser", function (req, res) {
  // Update a new user
  const userName = req.body.user;
  const ID = IDGenerator();
  const userObject = { id: ID, username: userName };
  user
    .updateOne(
      { _id: req.params.id },
      { $push: { users: userObject } },
      { runValidators: true }
    )
    .then(() => res.json({ message: "Successfully added user", id: ID }))
    .catch((err) => console.log(err));
});

app.put("/events/:id/update", function (req, res) {
  // update availabilities of user
  const avail = req.body.availability;
  user
    .updateOne(
      { _id: req.params.id },
      { availability: avail },
      { runValidators: true }
    )
    .then(() =>
      res.json({ message: "Successfully updated availability of user" })
    );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
