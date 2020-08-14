const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var multer=require('multer');


var { Add_Book_Model } = require('../Models/Add_Book_Model');
var { Register_Model } = require('../Models/Register_Model');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `${file.originalname}`)
    }
})
  
const upload = multer({ storage: storage }); 

router.post('/AddBook',  upload.single('Image'), (req, res, next) => {
    
    const file = req.file;
    if (!file) {     
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
    else
    {
        var Add_Book = new Add_Book_Model({
            Book_Name : req.body.Book_Name, 
            Book_Author_Name :req.body.Book_Author_Name,
            Price :req.body.Price,
            Quantity : req.body.Quantity,
            Image:file.filename
        });
    Add_Book.save((err, result) => {
            if(err)
            {
                console.log(err);
            }
            if (result) 
            {            
                console.log("success");
            }
        });
    }
})

router.get('/ViewUserDetail',(req,res)=>
{
    Register_Model.find({} ,(err , result)=>
    {
        if(err)
        {
            console.log("error hai");
        }
        if(result)
        {
            console.log("success hai kya...");
            return res.json({value:result});
        }
    })
})
  module.exports = router;


