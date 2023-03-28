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
      "Increasing muscle strength can help make everyday movements less of a struggle ",
    filename: "strength_training.jpg",
  },
  {
    name: "Yoga",
    benefit:
      "it can help build muscle, dramatically boost metabolism, and breathing fully and deeply increases circulation, also helping the metabolism to stay ticking along nicely",
    filename: "yoga.jpg",
  },
  {
    name: "Plyometrics",
    benefit:
      "it improved ability to change directions quickly, which fitness professionals may refer to as agility or nimbleness",
    filename: "polymetrics.jpg",
  },
  {
    name: "Pilates",
    benefit:
      "The goal of Pilates is to balance your muscles by targeting and strengthening",
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
