const express=require("express");
const mongoose=require('mongoose');
const math = require('mathjs');
const cors = require('cors');

const app = express();

require('dotenv').config();
const port = process.env.PORT||5000;


app.use(cors());
app.use(express.json());

const calculateRoute=require('./routes/calculate');
//const libraryRoute=require('./routes/library');

app.use('/calculate', calculateRoute);
//app.use('/library', libraryRoute);


app.listen(port, ()=> console.log(`Port run on ${port}`));

/*
const number1=12;
const number2=12;
console.log(`run ${ typeof math.evaluate(`${number1}-${number2}`)}`);
console.log(`type: ${typeof number1 === 'number'}`)
*/