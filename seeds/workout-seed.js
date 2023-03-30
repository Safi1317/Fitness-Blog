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
      "Jumping rope activates multiple muscle groups. As you swing the rope around and jump,you also engage your:Hips,Arms,Abdominals and Shoulders",
    difficulty_level: "moderate",
    equipment: "rope",
    reps: "10",
    username: "Aliya",
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
    username: "Safia",
    activity_id: 2,
    user_id: 1,
  },
  {
    name: "Deadlift",
    filename: "deadliftgif2.webp",
    description:
      "The deadlift is a hip-hinging movement that targets the hamstrings and glutes.",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    username: "MoMo",
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
    username: "Riley",
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
    username: "Sam",
    activity_id: 4,
    user_id: 1,
  },
  {
    name: "jump squats",
    filename: "Jump-Squats-Gif.gif",
    description: "test",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    username: "Sam",
    activity_id: 4,
    user_id: 1,
  },

  {
    name: "Vinyasa yoga",
    filename: "yogagif1.webp",
    description:
      "In vinyasa classes, movements are coordinated with your breath in order to flow from one pose to another",
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
    name: "Running",
    filename: "runninggif.gif",
    description:
      "help to build strong bones, as it is a weight bearing exercise. Strengthen muscles and burn plenty of kilojoules",
    difficulty_level: "moderate",
    equipment: "outside",
    reps: "10",
    username: "safia",
    activity_id: 6,
    user_id: 1,
  },
  {
    name: "Hiking",
    filename: "hikinggif.gif",
    description:
      "Hiking is an activity of moderate difficulty, which involves walking across long distances generally on trails or paths.",
    difficulty_level: "moderate",
    equipment: "outside",
    reps: "10",
    username: "safia2",
    activity_id: 6,
    user_id: 1,
  },
  {
    name: "Reformer Pilates",
    filename: "reformerpilatesgif.gif",
    description:
      " It improves the working of abdomen muscles and enhances the metabolism which ultimately accelerates the weight loss process.",
    difficulty_level: "moderate",
    equipment: "pilates machine",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 5,
    user_id: 1,
  },
  {
    name: "Mat Pilates",
    filename: "pilatesgif.gif",
    description:
      "It strengthens your hips, pelvic floor, shoulders, legs’ muscles, and lower back.",
    difficulty_level: "moderate",
    equipment: "mat",
    reps: "10",
    username: "Aliya_jay",
    activity_id: 5,
    user_id: 1,
  },
];

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;
