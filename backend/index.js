// const Joi = require("joi");
// const express = require("express");
// const app = express();

// var bodyParser = require("body-parser");

// app.use(express.static(__dirname + "/public"));

// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

// app.use(express.json());

// const schedules = [
//   {
//     id: 1,
//     start_date: "23/10/2020",
//     end_date: "27/10/2020",
//     name: "Kevin",
//   },
//   {
//     id: 2,
//     start_date: "24/10/2020",
//     end_date: "26/10/2020",
//     name: "Lucas",
//   },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello i am listening!!!!");
// });

// app.get("/api/schedules", (req, res) => {
//   res.send(schedules);
// });

// app.get("/api/schedules/:id", (req, res) => {
//   const schedule = schedules.find((c) => c.id === parseInt(req.params.id));
//   if (!schedule) res.status(404).send("Id does not exist");
//   res.send(schedules);
// });

// app.post("/api/schedules", (req, res) => {
//   const schema = Joi.object({
//     name: Joi.string().min(3).required(),
//     start_date: Joi.string().min(3).required(),
//     end_date: Joi.string().min(3).required(),
//   });
//   const result = schema.validate(req.body);
//   if (result.error) {
//     res.status(404).send(result.error.details[0].message);
//     return;
//   }

//   const schedule = {
//     id: schedules.length + 1,
//     start_date: req.body.start_date,
//     end_date: req.body.end_date,
//     name: req.body.name,
//   };
//   schedules.push(schedule);
//   res.send(schedule);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening to port ${port}`));
