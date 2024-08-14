'''
const express=require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT||5000;


app.listen(port, ()=> console.log(`Port run on ${port}`));

'''


mongodb:
username: heyuncai10
password: yaIB5JuZpqJIFY0h


    if (res.status !==400){
        const newEquation = new Equation({
            number1,
            number2,
            number3,
            sign
        });

        newEquation.save()
        .then(()=>res.json({msg: `${newEquation} is added`}))
        .catch((err)=>res.status(400).json({error: err}));
    }else{
        res.json({error: "The status is 400"});
    }