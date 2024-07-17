//main entry point file -> do not matter what you called

//create simple express server
const express=require('express');
const path=require('path');
const logger=require('./middleware/logger');
const exphbs=require('express-handlebars');
const app = express();//initialized a var called app with express
const members=require('./Members');
//app now has a bunch of properties and methods and one of them is listen


//3.0 GETS ALL MEMBERS: postman: Get: http://localhost:5000/api/members


/*
//1.0 CREATE A ROUTE
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


//10.0 Render(mildeware -> know use handelbars) 
//Handlebars middleware
app.engine('handlebars', exphbs.engine); //set template engine to handeeabrs and pass in exphbs
app.set('view engine', 'handlebars');//setupview engine



//7.0 CREATE MEMBER (BODY PARSER MIDDLEWARE)
app.use(express.json());//handel row jason
app.use(express.urlencoded({extended:false}));//handel form submission, hanel url encoded data

//------------------------------------------
//10.1Homepage Route
app.get('/', (req,res)=>{
    res.render('index', {
        //send in data
        title:'Member app',
        members
    });//want to render index view
})

//show mwmbers because homepage route is ahead of static ones (usually have 1)
//------------------------------------------

//2. SET STATIC FOLDE 
//-> no need to deal with content type/laoding htmo, css file like node
//now just need to put file in (regular html, css)
app.use(express.static(path.join(__dirname,'public')));//use is a method when you want to include midleware
//setting public as satic folder

const PORT = process.env.PORT || 5000; //look at the environment variable or 5000 because the server is going to have the port number is environment var and run 5000 if it is not possible


//6.0 Member api routes
//import member router  {/api/members -> parent route} require(file)
app.use('/api/members', require('./routes/api/members'));




app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));//callback is a section param