const router = require("express").Router();
const authController = require("../controllers/authController");
const passport = require('../controllers/passport.js')

router.route("/register")
  .post(authController.registerUser)

router.post('/login',
  // use passport to authenticate 
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true}),
    // callback function redirects to the homepage
    function(req, res) {
      res.redirect('/');
    }
  );

  router.get('/logout', (req, res) => {
    // end the user session
    req.logout()
    // sending the success message
    req.flash('success_msg', 'You are logged out')
    // redirect user to the login page after logout
    res.redirect('/login')
   
})




module.exports = router