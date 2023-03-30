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



router.post("/:id", async (req, res) => {
  // create a new workout
  try {
    const newWorkoutData = await Workout.create(
      {
        name,
        description,
        difficulty_level,
        equipment,
        reps,
        username
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(newWorkoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;