const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
// const activity = require("./activityroute");
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/activity", activity);

module.exports = router;
