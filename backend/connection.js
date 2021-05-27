const mongoose = require("mongoose");
if (process.env.NODE_ENV === 'production') {
  const username = process.env.DB_USERNAME
  const password = process.env.DB_PASSWORD
} else {
  const { username, password } = require("./credentials.json");
}

const URI = `mongodb+srv://${username}:${password}@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
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
