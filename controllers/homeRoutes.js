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

// router.post("/activity/", async (req, res) => {
//   // create a new workout
//   console.log("hit createworkout route");
//   try {
//     const {
//       name,
//       description,
//       difficulty_level,
//       equipment,
//       reps,
//       username,
//       filename,
//       activity_id,
//       user_id,
//     } = req.body;

//     const newWorkoutData = await Workout.create(
//       {
//         // description,
//         // benefits_workout,
//         // difficulty_level,
//         // equipment,
//         // reps,
//         // username,

//         name,
//         description,
//         difficulty_level,
//         equipment,
//         reps,
//         username,
//         filename:'cardioimg1.jpg',
//         activity_id:1,
//         user_id:1,
        
//       }
//       // {
//       // where: {
//       //   id: req.params.id,
//       // },
//       // }
//     );
//     console.log("testing");
//     console.log(name);
//     res.status(200).json(newWorkoutData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get("/login", (req, res) => {
  console.log("hit login route");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn });
});

module.exports = router;
