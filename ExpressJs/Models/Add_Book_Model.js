const mongoose = require('mongoose');

var Add_Book_Model = mongoose.model('Add_Book_Model', {
    Book_Name: { type: String },
    Book_Author_Name : {type : String},
    Price:{type:Number},
    Quantity:{type:Number},
    Image : { type: String}
});

module.exports = { Add_Book_Model };