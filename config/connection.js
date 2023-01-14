
// requiring the mongoose
const mongoose = require("mongoose");

// connecting the mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/social_DB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo
// queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;