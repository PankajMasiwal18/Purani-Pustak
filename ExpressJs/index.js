const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var JWTHelper = require('./jwtHelper');


const  mongoose  = require('./db.js');
var Register_Controller = require('./Controllers/Register_Controller.js');
var Login_Controller = require('./Controllers/Login_Controller');
var Admin_Controller = require('./Controllers/Admin_Controller');
var Search_Controller = require('./Controllers/Search_Controller');
var Razorpay_Controller = require('./Controllers/Razorpay_Controller');


var app = express();
app.use(express.static(path.join(__dirname,"./public/uploads/")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({ 
    origin: ['http://localhost:4200','http://127.0.0.1:4200','http://localhost:4202','http://127.0.0.1:4202'],
    credentials:true
}));
//passport
var passport = require('passport');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name:'myname.sid',
  resave:true,
  saveUninitialized:true,
 secret:'secret',
  cookie:{
    maxAge:36000000,
    httpOnly:false,
    secure:false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());
require(path.join(__dirname, 'passport.config'));
app.use(cookieParser());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/Search',Search_Controller);
app.use('/Register', Register_Controller);
app.use('/Login',Login_Controller);
app.use('/Admin',Admin_Controller);
app.use('/Razorpay',Razorpay_Controller);