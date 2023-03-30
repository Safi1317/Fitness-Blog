const router = require("express").Router();
const { Workout, Comment, User, Activity } = require("../models");
// const withAuth = require("../utils/auth");

//GET all activites for homepage
router.get("/", async (req, res) => {
  try {
    const dbActivityData = await Activity.findAll({});

    const activities = dbActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    res.render("homepage", {
      activities,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  console.log("hit login route");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn });
});

module.exports = router;
