
const passport = require('./passport')
var LocalStrategy = require('passport-local').Strategy;

var bcrypt = require('bcrypt');
// download the models of User from user.js and Sequelize from index.js
const db = require('../models')
//

module.exports = {
  registerUser: (req, res) => {

    class UserConstructor {
        constructor(username, password) {
            this.username = username,
            this.password = password
        }
      }

    console.log("register user function request ", req)

    // store the new user name and password in the variables
    var username = req.body.username
    var password = req.body.password
    var conf_password = req.body.conf_password
  
    // Validation
    req.checkBody('username', 'Username is required').notEmpty()
    req.checkBody('password', 'Password is required').notEmpty()
    req.checkBody('conf_password', 'Passwords do not match').equals(req.body.password)
  
    var errors = req.validationErrors()
  
    console.log("validation errors", errors)
  
    if(errors) {
        // if we have the errors (as if 'epmty field') send them to the register page
        res.render('register', {
            errors: errors
        })
    } else {
        // if all fields are not empty we need to create newUser
       var newUser = new UserConstructor(username, password)
       console.log('newUser ', newUser)
        db.User.create(newUser).then((user)=>{
            console.log("user after User.create ", user)
            req.flash('success_msg', 'You are registered and can now login')
            res.redirect('/login')
        })
        .catch((err) => {
            console.log("err ", err)
            //console.log("my error ", err.errors[0].message)
            if (err.errors[0].message === "username must be unique") {
                req.flash('error_msg', 'User with this username is already exist, try different username')
                res.redirect('/register')
            }
        })
    }
  },

  loginUser: (req, res) => {
    console.log("im in loginUser")
    try {
        passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true})
    } catch (err) {
        
        console.log("error.mesage ", err.mesage)
    }
   
    // callback function redirects to the homepage
  },

  loginUserCallback: (req, res) => {
      console.log("im callback that redirects / after login")
    res.redirect('/');
  },

  logoutUser: (req, res) => {
      // end the user session
      req.logout()
      // sending the success message
      req.flash('success_msg', 'You are logged out')
      // redirect user to the login page after logout
      res.redirect('/login')
  }
} 

