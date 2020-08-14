const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var passport = require('passport');
var jwt = require('jsonwebtoken');


var { Register_Model } = require('../Models/Register_Model');
var jwtHelper = require('../jwtHelper');


router.post('/',(req,res,next)=>{
    passport.authenticate('local', function(err, result, info) 
    {console.log("login check");
        if (err) 
        { 
            return res.json({message:'Error_Occure_In_Server_Side'}); 
        }
        // If user doesnot exist .
        if (result == false) 
        { 
            return res.json(info); 
        }
        else
        {
            req.login(result, function(err,check) 
            {
                // If Password is worng .
                if (result == true) 
                { 
                    console.log('check');
                    return res.json({ message: 'Worng_Password' }); 
                }
                // If Every thing goes correct .
                if(result != null)
                {
                    const token = jwt.sign({_id:result._id},secret="secret");
                    return res.json({ message: token }); 
                }
            });
        }
      })
      (req, res, next);      
});


router.get('/BookDetail',jwtHelper.verifyJwtToken,function(req,res){
    Register_Model.findOne({ _id: req._id },(err, user) => 
        {
            if (!user)
            {
                return res.status(404).json({ status: false, message: 'User record not found.' });
            }
            else
            {
                return res.status(200).json({message:user._id});
            }
        }
    );
  });

  
  
module.exports = router;
