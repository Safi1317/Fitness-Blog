const router = require("express").Router();
const userRoutes = require("./userRoutes");
const activityRoutes = require('./activityRoutes')
const workoutRoutes = require('./workoutRoutes')

const fetch = require("node-fetch");


router.use("/users", userRoutes);
router.use("/activity", activityRoutes);
router.use("/workout", workoutRoutes);


router.get("/get-workouts", (request, response, next) => {
  //  TODO: change biceps with request.value
  fetch("https://api.api-ninjas.com/v1/exercises?muscle=biceps", {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "m1kzM2YOAM4ge5YHsdOGyQ==j8BUSIGy53nP4hfg",
    },
  })
    .then((response) => response.json())
    .then((json) => response.status(200).json(json));
});

module.exports = router;
