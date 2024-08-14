const express=require("express");
const mongoose=require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();
const port = process.env.PORT||5000; //PROCESS.ENV


app.use(cors());
app.use(express.json());


//------------- CONNECT TO MONGODB -------------
const uri = process.env.ATLAS_URL; //PROCESS.ENV
mongoose.connect(uri);
const connection=mongoose.connection;
connection.once('open', ()=>{
    console.log("connect to mongodb sucessfully");
})

//--------------------------------- LOADING ROUTES ---------------------------------

const calculateRoute=require('./routes/calculate');
//const libraryRoute=require('./routes/library');

app.use('/calculate', calculateRoute);
//app.use('/library', libraryRoute);


app.listen(port, ()=> console.log(`Port run on ${port}`));
