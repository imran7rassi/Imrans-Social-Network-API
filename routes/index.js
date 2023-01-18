
// requiring the express 
const router = require("express").Router();
// requiring the api
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
// if there is an err 
// so through this message
router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;