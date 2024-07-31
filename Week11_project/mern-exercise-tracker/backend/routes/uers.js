//Router 
// (.router because it is a router we create)

const router = require("express").Router();
const User = require('../models/user.model'); //mongoose model


//first router/endpoint -> handelling http get request -> on / uri path
router.route('/'). get((req,res)=>{ // localhost5000/Users/
    User.find()//mongoose method get a list of users from mongoose atlas db => return a promise 
    .then(users=>res.json(users))
    .catch(err=> res.status(400).json('Error:'+err));
});


//second endpoint
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const newUser= new User({username});//create a new instace of user

    newUser.save()//save to database
    .then(()=>res.json('User added!'))
    .catch(err => res.status(400).json('Error:'+ err));
});

module.exports= router; //exporting the router