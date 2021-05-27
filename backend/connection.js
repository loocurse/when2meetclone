const mongoose = require("mongoose");
if (process.env.NODE_ENV === "production") {
  const URI = process.env.MONGO_PROD_URI;
  console.log(process.env)
} else {
  const { username, password } = require("./credentials.json");
  const URI = `mongodb+srv://${username}:${password}@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
}

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
