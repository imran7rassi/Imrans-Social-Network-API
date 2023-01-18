
// requiring the express
const router = require("express").Router();
// requiring the user routes
const userRoutes = require("./user-routes");
// requiring the thought routes
const thoughtRoutes = require("./thought-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
// exporting the router
module.exports = router;