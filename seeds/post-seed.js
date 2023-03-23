const { Post } = require("../models");

const postData = [
  {
    category: "Cardio",
    activity: "swimming",
    description:
      "Works out your chest, arms, legs, glutes and core. Consistent swimming on your back will help these muscle groups grow stronger.",
    difficulty_level: "moderate",
    equipment: "pool",
    reps: "10",
    user_id: 1,
  },
  {
    category: "Cardio",
    activity: "Jump Rope",
    description: "",
    difficulty_level: "moderate",
    equipment: "rope",
    reps: "10",
    user_id: 1,
  },
  {
    category: "Strength Training",
    Activity: "Agile strength",
    description:
      " It helps your body to move with ease and fluidity in any direction, which improves your coordination and balance while helping to prevent injuries..",
    difficulty_level: "intense",
    equipment: "a moderate-heavy weight",
    reps: "30 to 60 secs",
    user_id: 1,
  },

  {
    category: "Plyometrics",
    activity: "high-impact jumping",
    description:
      " This are exercises that involve a jumping or explosive movement.",
    difficulty_level: "intense",
    equipment: "rope",
    reps: "10",
    user_id: 1,
  },

  {
    category: "yoga",
    activity: "Vinyasa yoga",
    description:
      "In vinyasa classes, movements are coordinated with your breath in order to flow from one pose to another.",
    difficulty_level: "easy",
    equipment: "mat",
    reps: "10",
    user_id: 1,
  },
  {
    category: "yoga",
    activity: "Kundalini yoga",
    description:
      "A kundalini class will really work your core and breath with fast-moving, invigorating postures and breath exercises.",
    difficulty_level: "Intense",
    equipment: "mat",
    reps: "10",
    user_id: 1,
  },
];

const seedpost = () => Post.bulkCreate(postData);

module.exports = seedpost;
