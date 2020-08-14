const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

// var Razorpay = require('../razorpay_Config');

var Razorpay = require('razorpay');

var instance = new Razorpay({
    key_id: 'rzp_test_Y6Cdip7L8JU6Tf',
    key_secret: 'XCt9owf8kWyY4ARulcNrGraO',
  });

// Razorpay.instance

router.post('/Order_Id',(req,res)=>
{   
    params = req.body;
    console.log(params);

    instance.orders.create(params,(err,order)=>
    {
        console.log(order);
    });

 

    // instance.orders.create(params).then((data) => {
       
    //    // res.send({"sub":data,"status":"success"});
    //     console.log("data hai kya...");
    //    console.log(data);
    // Razorpay.instance.orders.create(params,(err,data)=>
    // {
    //     console.log("data hai kya ...");
    //     console.log(data);
    //     // if(err)
    //     // {
    //     //     console.log('err');
    //     //     console.log(err);
    //     // }
    //     if(data)
    //     {
    //         console.log('data');
    //         console.log(data);
    //     }
    // })
});

module.exports = router;














    // var options = {
    //     amount : data.amount * 100,
    //     currency : "INR",
    //     receipt : data.email,
    //     payment_capture :'0'
    // };

    // Razorpay.orders.create(options , (err, result) =>
    // {
    //     if(err)
    //     {
    //         console.log(err);
    //     }
    //     else
    //     {
            // res.json({key: Razorpay.config.key_id})
    //         console.log("pay ...!!!!....");
    //         console.log(Razorpay.instance.config.key_id);
    //         console.log("yessssssssssssssss");
    // //     }
    // })