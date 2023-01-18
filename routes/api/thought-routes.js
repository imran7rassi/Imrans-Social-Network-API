
// requiring the express 
const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Api thoughts
router.route("/").get(getAllThought).post(createThought);

// Api thoughts by id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// thought by id for the reactions
router.route("/:thoughtId/reactions").post(addReaction);

// routes for reaction ID
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;