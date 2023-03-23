const router = require('express').Router();
const fitnessRoutes = require("./userRoutes")

router.use('/fitness', fitnessRoutes);

module.exports = router;
