//this will be used to create new objects

// IMPORT MONGOOSE IN ORDER TO CREATE A SCHEMA
const mongoose = require("mongoose");

// Schema is the blueprint to create a model
// Create our learner schema
const learnerSchema = new mongoose.Schema({
  firstName: {
    //these are Schema type options
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  location: {
    type: String,
  },
  courses: {
    type: [String],
  },
});

//  Lets FINALLYYYYYYYY!!!!! CREATE OUR MODEL -- Models must be UPPERCASE
const Learner = mongoose.model("Learner", learnerSchema);


//EXPORT OUR LEARNER MODEL TO OTHER PARTS OUR APPLICATION
//THIS IS A SINGLE EXPORT
module.exports = Learner;
