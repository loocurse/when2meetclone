const express = require("express");
const user = require("./Models/Event.js");
const { IDGenerator, create_users_time_obj } = require("./utils.js");

var router = express.Router()

router.get("/api/events", function (req, res) {
  //Show all users
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/api/events/:id", function (req, res) {
  //Finds users by ID
  user
    .findById(req.params.id)
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/api/events/add", function (req, res) {
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

router.put("/api/events/:id/adduser", function (req, res) {
  // Update a new user
  const userName = req.body.user;
  const ID = IDGenerator();
  const userObject = { id: ID, name: userName };
  user
    .updateOne(
      { _id: req.params.id },
      { $push: { users: userObject } },
      { runValidators: true }
    )
    .then(() => res.json({ message: "Successfully added user", id: ID }))
    .catch((err) => console.log(err));
});

router.put("/api/events/:id/update", function (req, res) {
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

module.exports = router;