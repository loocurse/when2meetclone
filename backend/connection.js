const mongoose = require("mongoose");

URI =
  "mongodb+srv://kehvinbehvin:when2meetclone@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log("Database has been connected");
};

module.exports = connectDB;
