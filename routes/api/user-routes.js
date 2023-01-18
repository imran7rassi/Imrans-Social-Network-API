
// requiring the express
const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// routes for the user
router.route("/").get(getAllUser).post(createUser);

// routes for finding user by id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// route for friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;