const router = require("express").Router();
const { Workout, Comment, User, Activity } = require("../models");
// const withAuth = require("../utils/auth");

//GET all activites for homepage
router.get("/", async (req, res) => {
  try {
    const dbActivityData = await Activity.findAll({});

    const activities = dbActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    res.render("homepage", {
      activities,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all workouts for activity
router.get("/activity/:id", async (req, res) => {
  try {
    const dbActivityData = await Activity.findByPk(req.params.id, {
      include: [
        {
          model: Workout,
          attributes: [
            "id",
            "name",
            "description",
            "difficulty_level",
            "equipment",
            "reps",
            "username",
            "filename",
          ],
        },
      ],
    });

    const activity = dbActivityData.get({ plain: true });
    res.render("workout", { workouts: activity.workouts });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET one workout
router.get("/workout/:id", async (req, res) => {
  try {
    const dbWorkoutData = await Workout.findByPk(req.params.id, {});

    if (!dbWorkoutData) {
      res.status(400).json({ message: "No Workout found with that id" });
      return;
    }

    // res.status(200).json(dbWorkoutData)
    // const workoutData = dbActivityData.get({ plain: true });
    console.log(dbWorkoutData);
    res.render("comment", { workouts: [dbWorkoutData.dataValues] });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/activity", async (req, res) => {
  // router.post("/workout/:id", async (req, res) => {
  // create a new workout
  console.log("hit createworkout route");
  try {
    const newWorkoutData = await Workout.create(
      {
        workout_name: req.body.Workout.create,
        benefits_workout: req.body.Workout.create,
        difficulty_level: req.body.Workout.create,
        equipment: req.body.Workout.create,
        reps: req.body.Workout.create,
        username: req.body.Workout.create,
      }
      // {
      // where: {
      //   id: req.params.id,
      // },
      // }
    );

    res.status(200).json(newWorkoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // Where is this action method sending the data from the body of the fetch request? Why?
  // It is sending the data to the Model so that one workout can be updated with new data in the database.
  console.log("hit put route");
  try {
    const newworkout = await Workout.update(
      {
        workout_name: req.body.workout_name,
        benefits_workout: req.body.benefits_workout,
        difficulty_level: req.body.difficulty_level,
        equipment: req.body.equipment,
        reps: req.body.reps,
        username: req.body.username,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (workout) is then sent back to handler that dispatched the fetch request.
    res.status(200).json(newworkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  console.log("hit login route");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn });
});

module.exports = router;
