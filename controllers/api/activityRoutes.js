const router = require("express").Router();
const { Workout, Comment, User, Activity } = require("../../models");
const withAuth = require("../../utils/auth");

//GET all workouts for activity
router.get("/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
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
    res.render("workout",
      { workouts: activity.workouts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/activity/", async (req, res) => {
  // create a new workout
  console.log("hit createworkout route");
  try {
    const {
      name,
      description,
      difficulty_level,
      equipment,
      reps,
      username,
      filename,
      activity_id,
      user_id,
    } = req.body;

    const newWorkoutData = await Workout.create(
      {
        // description,
        // benefits_workout,
        // difficulty_level,
        // equipment,
        // reps,
        // username,

        name,
        description,
        difficulty_level,
        equipment,
        reps,
        username,
        filename:'cardioimg1.jpg',
        activity_id:1,
        user_id:1,
        
      }
      // {
      // where: {
      //   id: req.params.id,
      // },
      // }
    );
    console.log("testing");
    console.log(name);
    res.status(200).json(newWorkoutData);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;