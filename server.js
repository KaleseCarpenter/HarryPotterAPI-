//IMPORT MONGOOSE IN ORDER TO CONNECT TO OUR DATABASE
const mongoose = require("mongoose");

// IMPORT DOTENV IN ORDER TO CONNECT TO OUR DATABASE
const dotenv = require("dotenv");

//Use dotenv to connect our config file // run this before my application is called
dotenv.config({
  path: "./config.env",
});

console.log(process.env)

// IMPORT OUR EXPRESS APPLICATION
const app = require("./Mongoapp");

// CREATE A VARIABLE TO REPRESENT OUR DATABASE
// we replace the <password> with the actual password in my config.env file
const PerScholasDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() =>{
  console.log("DATABASE IS UP AND RUNNING...")
})

// Create a variable that represent our port number
const port = 3000;

// Listen to the request/response cycle
app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
