const router = require("express").Router();

const credsRoutes = require("./creds");

//  Routes
router.use("/creds", credsRoutes);
module.exports = router;