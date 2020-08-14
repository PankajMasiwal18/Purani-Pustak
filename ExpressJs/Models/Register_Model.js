const mongoose = require('mongoose');

var Register_Model = mongoose.model('Register_Model', {
    name: { type: String , require:true},
    email: { type: String , require:true,unique: true},
    mobile_number: { type: Number , require:true},
    state: { type : String , require:true},
    city:{ type: String , require:true},
    local_address:{type : String , require:true},
    pin_code :{type : Number , require:true},
    password : {type : String , require:true}
});

module.exports = { Register_Model };