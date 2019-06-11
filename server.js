// Dependencies
var express = require("express");

// Create an instance of the express app.
var app = express();

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to the.
var routes = require("./controllers/burgersController.js");

app.use(routes);

var PORT = process.env.PORT || 8080;
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App now listening on port:", PORT);
  });
});
