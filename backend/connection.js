const mongoose = require('mongoose')

const connectDB = async (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  console.log('Database has been connected')
}

module.exports = connectDB
