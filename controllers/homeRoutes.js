const router = require("express").Router();
const { Workout, Comment, User, Activity } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbActivityData = await Activity.findAll({
    });

    const activities = dbActivityData.map((activity) =>
      activity.get({ plain: true })
    );

    res.render('homepage', {
      activities
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
