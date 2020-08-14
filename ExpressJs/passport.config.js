var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require('./db');
const bcrypt = require('bcrypt');

var { Register_Model } = require('./Models/Register_Model');

passport.use('local',new LocalStrategy(
    {
    usernameField:'email',
    passwordField:'password'
    },function (username, password, done)
    {
        Register_Model.findOne({ email: username }, function (err, result) 
        {
            if (err)
            { 
                return done(err); 
            }
            if (result == null) 
            {
                return done(null, false, { message: 'User_Does_Not_Exist' });
            }
            else
            {
               var com= bcrypt.compareSync(password, result.password);
               if(com == true)
               {
                    return done(null, result);
               }
               if(com == false)
               {
                    return done(null,true);
               }
            }
        })
    }));

passport.serializeUser(function(result, done) 
{
    done(null, result._id);
});

passport.deserializeUser(function(id, done) 
{
    Register_Model.findById(id, function(err, result) 
  {
    done(err, result);
  })
}) 