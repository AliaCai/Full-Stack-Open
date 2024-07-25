const LocalStrategy = require('passport-local').Strategy //get strategy from it
const bcrypt=require('bcryptjs')



function initialize(passport, getUserByEmail, getUserById){//(name, function to authenticate user)

    const authenticateUser = async (email, password, done) =>{
        const user = getUserByEmail(email)
        if(user==null){
            return done(null, false, {message: 'No user with that email'}) //1. error, user found, meg
        }


        try{
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }else{
                return done(null, false, {message: 'Password incorrect'})
            }
        }catch (e){
            return done(e)//error e -> has error in application
        }
    }


    passport.use(new LocalStrategy({usernameField: 'email'} , authenticateUser))
    passport.serializeUser((user, done)=>{ done(null, user.id)//serialize our user to store inside the session

    })
    passport.deserializeUser((id, done)=>{ //seroalize our user as a single id (?)

       return done(null, getUserById(id))
    })

}

module.exports = initialize