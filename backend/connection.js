const mongoose = require("mongoose");
//const { username, password } = require("./credentials.json");

const URI = `mongodb+srv://kehvinbehvin:when2meetclone@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kehvinbehvin:@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  console.log("Database has been connected");
};

module.exports = connectDB;
