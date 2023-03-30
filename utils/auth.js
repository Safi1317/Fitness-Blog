const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    console.log(1);
    if (!req.session.logged_in) {
      console.log(2);
      res.redirect('/login');
    } else {
      console.log(3);
      next();
    }
    console.log(4);
  };
  
  module.exports = withAuth;
  