const mongoose = require("mongoose");
const dbUrl = process.env.MONGODB_URI;

mongoose
  .connect(( process.env.MONGODB_URI || dbUrl ), {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  User: require("./User"),
  Decision: require("./Decision"),
  Option: require("./Option"),
};

mongoose.set('debug', true);