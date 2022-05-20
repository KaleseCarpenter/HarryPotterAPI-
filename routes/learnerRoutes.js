// IMPORT EXPRESS TO CREATE EXPRESS ROUTERS
const express = require("express");

// IMPORT OUR LEARNER CONTROLLER
const learnerController = require("./../controllers/learnerController");

// Create an express router
const router = express.Router();

// Lets refactor our route handlers
router
  .route("/")
  .get(learnerController.getAllLearners)
  .post(learnerController.createLearner);
router
  .route("/:id")
  .get(learnerController.getSingleLearner)
  .patch(learnerController.updateLearner)
  .delete(learnerController.deleteLearner);

// EXPORT OUR ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
