if (process.env.NODE_ENV !== 'production'){ //means we are in develppment
    require('dotenv').config()//load in different environment variables and set them in process.env
}

const express = require('express')
const app=express()
const bcrypt=require('bcryptjs')//have access to that variable
const passport=require('passport')//'passport' is the library we installed
const flash=require('express-flash')
const session=require('express-session')


const initializePassport = require('./passport-config');
initializePassport(
    passport, 
    email =>  users.find(user=>user.email===email));//passport is the var

const users=[]


app.set('view-engine','ejs')//our view engine set to ejs and we can ejs in our tempplate
app.use(express.urlencoded({extended: false }))//getting infromation from form -> tell application is to take from from email and password and we want to build access inside request variable, in post methd
app.use(flash());
app.use(session({
    secret: process.env,//kety we want to keep secrete, enctypt all the information for us
    resave:false,//should we resave our session variable if nothing changes 
    saveUninitialized:false// do you want to save an empty value in the session if there is no value
}));
app.use(passport.initialize())//set up some basic for us
app.use(passport.session())//store the variables to be presisted in the enteire session user have //it is going to work with app.use(session()) above


//not setup route: -> show Cannot GET/


app.get('/', (req, res)=>{
    res.render('index.ejs', {name:'Kyle'})
})

app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

//first ->local strategy. second -> a list of options we want to modify
app.post('/login', passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true//let us ahve a flash message (display to the user) === to msg from paspport-config.js
}))

app.get('/register', (req,res)=>{
    console.log('run');
    res.render('register.ejs')
})

app.post('/register', async(req,res)=>{
    //name field: req.body.name (this name corresponf to field after name="")
    //bcrype -> library
    try {
        const hashedPassword= await bcrypt.hash(req.body.password, 10);//10 -> how secur we want it to be, standard default + quick, secure
        //because bcrypt.hash(req.body.password, 10); is async, so it is returned after waiting for it
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword //safe to store in datavase
        })

        res.redirect('/login')
    } catch{//failre
        res.redirect('/register')

    }
    console.log(users)//every time we save application and reload, this user will rest -> bc not db
})
app.listen(3000)