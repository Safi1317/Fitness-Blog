const sequelize = require("../config/connection");
const seedComment = require("./comment-seed");
const seedActivity = require("./activity-seed");
const seedUser = require("./user-seed");
const seedWorkout = require("./workout-seed");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedActivity();
  await seedWorkout();

  await seedComment();

  process.exit(0);
};

seedAll();
