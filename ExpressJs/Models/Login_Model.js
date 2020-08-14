const mongoose = require('mongoose');

var Login_Model = mongoose.model('Login_Model', {
    email: { type: String },
    password : {type : String}
});

module.exports = { Login_Model };