const { Activity } = require("../models");

const activitydata = [
  {
    name: "Cardio",
    benefit:
      "Cardio exercises can benefit brain and joint health. It can increase blood flow and improve memory and thinking ability",
    filename: "cardio.jpg",
  },
  {
    name: "Strength Training",
    benefit:
      "Strength training (a.k.a. resistance training) involves using your own bodyweight or tools, like dumbbells or resistance bands, to build muscle mass, strength, and endurance.",
    filename: "strength_training.jpg",
  },
  {
    name: "Yoga",
    benefit:
      "Yoga can help build muscle, dramatically boost metabolism, and breathing fully and deeply increases circulation, also helping the metabolism to stay ticking along nicely",
    filename: "yoga.jpg",
  },
  {
    name: "Plyometrics",
    benefit:
      "Plyometrics is a type of exercise training that uses speed and force of different movements to build muscle power.",
    filename: "polymetrics.jpg",
  },
  {
    name: "Pilates",
    benefit:
      " Pilates is a form of exercise which concentrates on strengthening the body with an emphasis on core strength. Pilates concentrates on posture, balance and flexibility",
    filename: "pilates.jpg",
  },
  {
    name: "Outdoor excercises",
    benefit:
      "Outdoor exercise can help ward off seasonal affective disorder (SAD), depression and anxiety.",
    filename: "exerciseoutdoors.jpg",
  },
];

const seedActivity = () => Activity.bulkCreate(activitydata);

module.exports = seedActivity;
