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

// Create a way to handle errors
app.all("*", (request, response, next) => {
    // Create the actual error
    const routeError = new Error(
      `Ooops! Cannot find ${request.originalUrl} on our servers...`
    );
  
    // Assign a status code
    routeError.statusCode = 404;
  
    // Assign a status
    routeError.status = "fail";
  
    next(routeError);
  });
  
  // Create a global error handling function
  const globalErrorHandlingFunction = (error, request, response, next) => {
    // Retrieve the error status code
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";
    error.message = error.message || "Something went wrong...";
  
    // Send a response
    response.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  
    next();
  };
  
  // Create a middleware to bounce back the error
  app.use(globalErrorHandlingFunction);
  
  module.exports = app;
  