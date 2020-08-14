const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Add_Book_Model } = require('../Models/Add_Book_Model');

router.post('/',(req,res)=>
{
    search = req.body.search_input;
    console.log(search);
    Add_Book_Model.find({$or:[{Book_Name:search},{Book_Author_Name:search}]},(err,result)=>
    {
        if(err)
        {
            console.log("error hai");
        }
        if(result.length == 0)
        {
            console.log("empty hai");
        }
        else
        {
            console.log("success hai kya...!!!!!");
            console.log(result);
            return res.json({value:result});
        }
    })
});

router.get('/Edit_Book_Detail/:id',(req,res)=>
{
  Add_Book_Model.findById(req.params.id,(err,result)=>
  {
      if(err)
      {
          console.log("error hai");
      }
      if(result)
      {
          console.log("value mill gaya");
         return res.json({value:result});
      }
  })
});


router.post('/update/:id',(req,res)=>
{
    var emp = {
        Book_Name: req.body.Book_Name,
        Book_Author_Name: req.body.Book_Author_Name,
        Price: req.body.Price,
        Quantity: req.body.Quantity
    };
    Add_Book_Model.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (err) 
        {
            console.log("error hai ");
        }
        if(doc)
        { 
            console.log(' Update '); 
            console.log(doc);
        }
    });
})

router.get('/update/:id',(req,res)=>
{
    Add_Book_Model.findById(req.params.id, (err, doc) => {
        if (err) 
        {
            console.log("error hai ");
        }
        if(doc)
        { 
            console.log(' Update '); 
            console.log(doc);
            res.json({value:doc});
        }
    });
})
module.exports = router;