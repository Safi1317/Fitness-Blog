const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "i would try to add more reps next time",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "not enough time to perform high volumes of plyometric ",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Great work!",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
