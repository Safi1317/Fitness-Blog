const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "i would try to add more reps next time",
    username: "Safia_Ali",
    user_id: 1,
    workout_id: 1,
  },
  {
    comment_text: "not enough time to perform high volumes of plyometric ",
    username: "Safia_Ali",
    user_id: 2,
    workout_id: 2,
  },
  {
    comment_text: "Great work!",
    username: "Safia_Ali",
    user_id: 3,
    workout_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
