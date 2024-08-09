if (process.env.NODE_ENV !== 'production'){ //means we are in develppment
    require('dotenv').config()//load in different environment variables and set them in process.env
}

const express = require('express')
const app=express()
const bcrypt=require('bcryptjs')//have access to that variable
const passport=require('passport')//'passport' is the library we installed
const flash=require('express-flash')
const session=require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config');
initializePassport(
    passport, 
    email =>  users.find(user=>user.email===email),
    id => users.find(user=>user.id===id)
);//passport is the var

const users=[]


app.set('view-engine','ejs')//our view engine set to ejs and we can ejs in our tempplate
app.use(express.urlencoded({extended: false }))//getting infromation from form -> tell application is to take from from email and password and we want to build access inside request variable, in post methd
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,//kety we want to keep secrete, enctypt all the information for us //SESSION_SECRET -> name of the session key -> want to random generalize a long one
    resave:false,//should we resave our session variable if nothing changes 
    saveUninitialized:false// do you want to save an empty value in the session if there is no value
}));
app.use(passport.initialize())//set up some basic for us
app.use(passport.session())//store the variables to be presisted in the enteire session user have //it is going to work with app.use(session()) above
app.use(methodOverride('_method')) //this _method is what we use to ovveride method (index.ejs)

//not setup route: -> show Cannot GET/


app.get('/', checkAuthenticated,(req, res)=>{
    res.render('index.ejs', {name:req.user.name})//req.user is the actual user we are using
})

app.get('/login', checkNotAuthenticated, (req,res)=>{
    res.render('login.ejs')
})

//first ->local strategy. second -> a list of options we want to modify
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true//let us ahve a flash message (display to the user) === to msg from paspport-config.js
}))

app.get('/register',checkNotAuthenticated, (req,res)=>{
    console.log('run');
    res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async(req,res)=>{
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


//logout, cannot directly do delete function on html (need a form + POST)
app.delete('/logout', (req,res)=>{ //use methodOverride library
    req.logOut((err)=>{
         if (err) {
            throw err
         }}) //Passport set this for us automatically -> clear session+log user out
    res.redirect('/login')
})
//middleware function //next -> we call we are done, finish authentication
function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next() //just go to next
    }

    res.redirect('/login')
}

//not go back to login after loged in successfullt
function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}
app.listen(3000)