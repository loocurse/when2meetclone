// var express = require("express");
// let user = require("./Models/User");

// var app = express();

// // app.use(express.static(__dirname + "/public"));

// var router = express.Router();

// app.get("/", function (req, res) {
//   //Show all users
//   console.log("Hello");
//   user
//     .find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// app.post("/add", function (req, res) {
//   //Add a new user
//   console.log(req);
//   const username = req.body.username;

//   const newUser = new user({ username });

//   newUser
//     .save()
//     .then(() => res.json("User added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;
