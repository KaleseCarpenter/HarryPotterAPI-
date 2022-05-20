// Require express in order to build an express application
const express = require("express");

// IMPORT ROUTER
const learnerRouter = require("./routes/learnerRoutes");

// Create a variable to store our express methods
const app = express();
//CREATE A MIDDLEWARE TO PARE REQUESY BODY // calling the json method on the express server
app.use(express.json());


// Create middleware to handle our routes
app.use("/api/v1/learners", learnerRouter);

module.exports = app;
