const router = require("express").Router();
const userRoutes = require("./userRoutes");
const activityRoutes = require('./activityRoutes')
const workoutRoutes = require('./workoutRoutes')


router.use("/users", userRoutes);
router.use("/activity", activityRoutes);
router.use("/workout", workoutRoutes);


module.exports = router;
