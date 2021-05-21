const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    event_name: {
      type: String,
      required: true,
      unique: false,
      minlength: 3,
    },
    users: {
      type: Array,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    availability: {
      type: Object,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", eventSchema);
module.exports = User;
