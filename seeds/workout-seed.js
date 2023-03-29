const { Workout } = require("../models");

const workoutData = [
  {
    name: "swimming",
    filename: "swimminggif.gif",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "moderate",
    equipment: "pool",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Jump Rope",
    filename: "jumpropegif.gif",
    description:
      "Jumping rope is a form of exercise that involves swinging a rope around your body and jumping over it as it passes under your feet.",
    difficulty_level: "moderate",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 1,
    user_id: 1,
  },
  {
    name: "Push-Up",
    filename: "pushup.gif",
    description:
      "This exercise works the pectoral muscles in your chest and the triceps. These are the muscles in the back of your upper arms.",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    username: "Aliya_jay",
    activity_id: 2,
    user_id: 1,
  },
  {
    name: "Deadlift",
    filename: "deadlift.gif",
    description:
      "The deadlift is a hip-hinging movement that targets the hamstrings and glutes.",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    username: "Aliya_jay",
    activity_id: 2,
    user_id: 1,
  },
  {
    name: "Squat",
    filename: "squatgif.gif",
    description: "The squat targets your glutes, quads, and core muscles.",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 2,
    user_id: 1,
  },
  {
    name: "Split Squat Jump",
    filename: "splitsquatjumpgif.webp",
    description: "test",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 4,
    user_id: 1,
  },

  {
    name: "Vinyasa yoga",
    filename: "yogagif1.webp",
    description: "test",
    difficulty_level: "easy",
    equipment: "mat",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 3,
    user_id: 1,
  },
  {
    name: "Kundalini yoga",
    filename: "yogagif2.gif",
    description:
      "A kundalini class will really work your core and breath with fast-moving, invigorating postures and breath exercises.",
    difficulty_level: "Intense",
    equipment: "mat",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 3,
    user_id: 1,
  },
  {
    name: "outdoor exercise",
    filename: "runninggif.gif",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "easy",
    equipment: "outside",
    reps: "10",
    username: "safia",
    activity_id: 6,
    user_id: 1,
  },
  {
    name: "outdoor exercise",
    filename: "hikinggif.gif",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "moderate",
    equipment: "outside",
    reps: "10",
    username: "safia2",
    activity_id: 6,
    user_id: 1,
  },
  {
    name: "Pilates",
    filename: "swimmiing.avif",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "moderate",
    equipment: "pool",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 5,
    user_id: 1,
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
