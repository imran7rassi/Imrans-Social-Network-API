
// requiring the express
const express = require("express");
// requiring the connection.js
const db = require("./config/connection");
// requiring the routes
const routes = require("./routes");

// connecting the port
const app = express();
const PORT = process.env.PORT || 4050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// when it is connected so show the message
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});