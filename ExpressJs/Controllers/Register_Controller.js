const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var passport = require('passport');
var bcrypt = require('bcrypt');

var { Register_Model } = require('../Models/Register_Model');

router.post('/', (req, res) => {
    var User_Data = new Register_Model({
        name: req.body.name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        state: req.body.state,
        city: req.body.city,
        local_address: req.body.local_address,
        pin_code: req.body.pin_code,
        password: hashPassword(req.body.password),
    });
    User_Data.save((err, result) => {
        if (result) 
        {            
            return res.json({message : "success"});
        }
        else
        {
            if (err.code == 11000)
            {
                return res.json({message : "Duplicate"});
            }
            if(err)
            { 
                return res.json({message : "Server_Error"});
            }
        }
    });
});

hashPassword = function hashPassword(password)
{
    return bcrypt.hashSync(password,10);
}

module.exports = router;