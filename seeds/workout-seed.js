const { Workout } = require("../models");

const workoutData = [
  {
    name: "swimming",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "moderate",
    equipment: "pool",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 2,
    user_id: 1,
  },
  {
    name: "Jump Rope",
    description: "test",
    difficulty_level: "moderate",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 3,
    user_id: 1,
  },
  {
    name: "Push-Up",
    description:
      "Start in a high plank with your palms flat on the floor, hands shoulder-width apart, shoulders stacked directly above your wrists, legs extended behind you, and core and glutes engaged.Bend your elbows and lower your body to the floor. Drop to your knees if needed.Push through the palms of your hands to straighten your arms. That’s 1 rep.",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Deadlift",
    description:
      "Stand with your feet hip-width apart, knees slightly bent, and arms relaxed by the front of your quads, with a dumbbell in each hand. This is the starting position.Hinge forward at your hips and bend your knees slightly as you push your butt way back. Keeping your back flat, slowly lower the weight along your shins. Your torso should be almost parallel to the floor.Keeping your core engaged, push through your heels to stand up straight and return to the starting position. Keep the weight close to your shins as you pull up.Pause at the top and squeeze your butt. That’s 1 rep",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Pop Squat",
    description:
      "Start with your feet wider than hip-width and do a squat by sending your hips back, bending both knees, and bringing your palms together in front of your chest. Keep your core engaged and push through your glutes to stand,as you stand, let your arms fall by your sides and jump to bring both feet together, taking a hop in place.Immediately jump the feet apart and sink into a squat again. That’s 1 rep. Continue performing reps, hopping once in place between each squat..",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Split Squat Jump",
    description:
      "With your feet underneath your shoulders and hands at your sides, step your left foot forward as if you were doing a forward lunge; keep your left heel firmly planted.Bend both knees to create 90-degree angles with your legs. Your chest should be upright and your torso should be slightly forward so that your back is flat and not arched or rounded forward. Your left quad should be parallel to the floor and your left knee should be above your right foot. Your butt and core should be engaged.This is the split squat position.Push through your left foot to jump as high in the air as possible, bringing your arms together in front of your chest. Land softly and immediately sink back into the split squat position. That’s 1 rep.Complete all your reps on one side. Then switch sides and repeat",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },

  {
    name: "Vinyasa yoga",
    description:
      "In vinyasa classes, movements are coordinated with your breath in order to flow from one pose to another.",
    difficulty_level: "easy",
    equipment: "mat",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Kundalini yoga",
    description:
      "A kundalini class will really work your core and breath with fast-moving, invigorating postures and breath exercises.",
    difficulty_level: "Intense",
    equipment: "mat",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
