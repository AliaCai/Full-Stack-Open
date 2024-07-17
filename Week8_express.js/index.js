//main entry point file -> do not matter what you called

//create simple express server
const express=require('express');
const path=require('path');
const members=require('./Members');

const logger=require('./middleware/logger');

const app = express();//initialized a var called app with express
//app now has a bunch of properties and methods and one of them is listen


//3.0 SImple rest api (not deal with databse, hardbode array)

//GETS ALL MEMBERS: postman: Get: http://localhost:5000/api/members
app.get('/api/members', (req, res) =>{
    res.json(members);//do not need to strinfy it althought that is js object because this will take care of it
});
/*
//1. CREATE A ROUTE
//go to a webpage
//eg. app.get('/', function(req,res){}); or
app.get('/', (req,res) => {
    //res.send('<h1>Hello World!!</h1>');//send something to brower -> we can also send a single file/res.render a html template/json
    res.sendFile(path.join(__dirname, 'public', 'index.html') );
})
*/





//4.0 Login function midlesware: res, req, next -> in logger file now
//Init middleware -> do not log anymore
//app.use(logger);

//5.0 GET SINGLE MAMBER (getting by id) -> /:id url param, getting be req
app.get('/api/members/:id', (req, res)=>{
    res.send(req.params.id);
})


//2. SET STATIC FOLDE 
//-> no need to deal with content type/laoding htmo, css file like node
//now just need to put file in (regular html, css)
app.use(express.static(path.join(__dirname,'public')));//use is a method when you want to include midleware
//setting public as satic folder

const PORT = process.env.PORT || 5000; //look at the environment variable or 5000 because the server is going to have the port number is environment var and run 5000 if it is not possible


app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));//callback is a section param