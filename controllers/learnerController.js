//IMPORT THE MODEL TO CREATE NEW LEARNERS
const Learner = require("./../models/learnerModel");


// Refactor route controllers
// This is to retrieve all the learners at once from database
exports.getAllLearners = async (request, response) => {
// Retrieve all learners from our database
const learners = await Learner.find();
try { 
    //Send Repsonse--- 200 is success
    response.status(200).json({
      status: "success",
      data: {
        learners: learners,
      },
    });
  }catch(error){
      response.status(500).json({
        status: "error",
        message: "error",
      })
  }
};

// This controller is to create a new learner
exports.createLearner = async (request, response) => {
  try{
// Lets create our first learner
    const newLearner = await Learner.create(request.body);

  // Send a response
    response.status(201).json({
      status: "success",
      data: {
        newLearner: newLearner,
      },
});

    //if that doesnt work then show an -- 500 is internal server error
  }catch(error){
    response.status(500).json({
      status: "error",
      message: "error",
      
    })
   }

};
  

// This controller is to retrieve a single learner
exports.getSingleLearner = async (request, response) => {
  try{
    //Find a single learner using its id
    const learner = await Learner.findById(request.params.id);
    response.status(200).json({
      status: "success",
      data: {
        learner: learner, // in ES6 I can  write just ---- learner,
      },
    });
  }catch(error){
    response.status(500).json({
      status: "error",
      message: error,
    });
  }
};

// This controller is to update a single learner data
exports.updateLearner = async (request, response) => {
  try{
    // Find and update user
    const updatedLearner = await Learner.findByIdAndUpdate(request.params.id, request.body,{new: true});

    response.status(200).json({
      status: "success",
      data: {
        updatedLearner, 
      },
    });
  }catch (error){
    response.status(500).json({
      status: "error",
      message: error,
    })
  }
};

// This controller is to delete a single learner
exports.deleteLearner = async (request, response) => {
  try{
    await Learner.findByIdAndDelete(request.params.id);
    response.status(204).json({
      status: "success",
      data: {},
    });
  } catch(error){
    response.status(500).json({
      status: "error",
      message: error,
    });
  }
};
// WHEN YOU DO SINGLE EXPORT YOU EXPORT ONLY THE FUNCTION
// module.exports = getAllLearners;

// const learnerController = {
//     getAllLearners = (request, response) => {
//         response.status(500).json({
//           status: "fail",
//           data: {
//             message: "undefined routes",
//           },
//         });
// }
