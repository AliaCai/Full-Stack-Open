const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); //help us to connect to db

require('dotenv').config();//have envionrment variable .env file

const app=express();
const port=process.env.PORT ?? 5000;


//midlewareds
app.use(cors())
app.use(express.json());

/*
const uri = process.env.ATLAS_URL; //make the connection work, set env variable(ATLAS_URL)
mongoose.connect(uri, {useNewUrlParser: true, userCreateIndex: true});
const connection=mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
})
*/

const uri = process.env.ATLAS_URL;
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
})

//require and use the api-------------------------------------------------------------
const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/uers');

app.use('/exercises',exerciseRouter);//path, callback //routeuri/exercise -> load everything in exercise router
app.use('/users',userRouter);

//------------------------------------------------------------------------------------

//start server
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})