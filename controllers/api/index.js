const router = require("express").Router();
const userRoutes = require("./userRoutes");
const fetch = require("node-fetch");
const api_key = process.env.API_KEY;

router.use("/users", userRoutes);

router.get("/get-workouts", (request, response, next) => {

  fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${request.query.muscle}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": api_key,
    },
  })
    .then((response) => response.json())
    .then((json) => response.status(200).json(json));
});

module.exports = router;
