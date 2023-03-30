const router = require('express').Router();
const { Workout } = require('../../models');
const withAuth = require('../../utils/auth');

//GET one workout
router.get("/", async (req, res) => {
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


router.post('/:id', withAuth, async (req, res) => {
  try {
    const newWorkout = await Workout.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const workoutData = await Workout.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!workoutData) {
//       res.status(404).json({ message: 'No workout found with this id!' });
//       return;
//     }

//     res.status(200).json(workoutData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
