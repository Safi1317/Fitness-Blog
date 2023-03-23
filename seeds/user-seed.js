const { User } = require("../models");

const userData = [
  {
    username: "Safia",
    password: "safia1234",
  },
  {
    username: "Aliya",
    password: "aliya1234",
  },
  {
    username: "Riley",
    password: "riley1234",
  },
  {
    username: "Momo",
    password: "Sam1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
