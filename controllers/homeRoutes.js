const router = require('express').Router();


// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/',  async (req, res) => {
 

    res.render('homepage')
  
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;