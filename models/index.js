const User = require("./user");
const Activity = require("./activity");
const Workout = require("./workout")
const Comment = require("./comment");


Activity.hasMany(Workout, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
  constraints: false
});

Workout.belongsTo(Activity, {
  foreignKey: "activity_id",
  onDelete: "CASCADE",
  constraints: false
});


User.hasMany(Workout, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false
});

Workout.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false
});


Workout.hasMany(Comment, {
  foreignKey: "workout_id",
  onDelete: "CASCADE",
  constraints: false
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  constraints: false
});

module.exports = { User, Activity, Workout, Comment };
