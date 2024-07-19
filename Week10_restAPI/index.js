const Joi = require('joi');//return a class so Joi is name convention
const express = require ('express');//return a function
const app = express()//object of type Express ->useful method: get, post, put, delete


app.use(express.json());// express.json() + return a [iece of middlware => app.use()to use midleware in the request processing pipeline


/*
app.get(url,callback function ) 2 arguements, callback function [function be called when we have a http reuqest to this endpoint]
app.post()
app.put()
app.delete()
*/

const courses =[
{ id: 1, name: 'courses1'},
{ id: 2, name: 'courses2'},
{ id: 3, name: 'courses3'},
];
//hoe we define a route (url,callback function/route handler )
app.get('/', (req,res)=>{
    //req, a lot of useful properties of incomping req: https://expressjs.com/en/4x/api.html#express
    res.send('Hello World!');//responde with a hello world message: Sends the HTTP response.

});

//1.0 GET ALL THE COURSES
app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

//2.0 PARAMS AND QUERY
// /api/courses/1 (id=1), 
//defin a parameter id -> it can be anuthing
//it is possible to have multiple parameters in a route
app.get('/api/posts/:year/:month', (req, res)=>{


    res.send(req.params);

    //http://localhost:5000/api/posts/2018/1?sortBy=name, sortBy=name - query string parameter ->proide additional data to background servies
    // /route parameters (values, required infro,atopm) ? query prameter (anything option)
   res.send(req.query);//sotred in object with key value pairs
});

//3. 0GET 1 COURSE
app.get('/api/courses/:id', (req, res)=>{
    //need to pass a function->return bool
    const course = courses.find(c=> c.id === parseInt(req.params.id) )//req.params.id -> str
    //better to use let/const rather than var: let -> can change ; const -> dont change

    //if course does not have a value
    if(!course) return res.status(404).send('The course with the give ID was not found.')//404 -> reource not found
    res.send(course);//else
    //->get json object
});


//4.0 POST to create a new course + Joi
app.post('/api/courses',(req,res) =>{
    /*
    const schema=Joi.object({
        name: Joi.string().min(3).required()//min 3 characters
    });

    const result = schema.validate(req.body);//return a object
   // console.log(result); //: value, error (onlye one has results)

    
    if (req.body.name | req.body.name.length < 3){
        //status: 400 as bad request
        res.status(400).send('Name is requried and should be minimum 3 characters');
        return;//return because we don't want the rest function to bex executed
    }
    */

    const { error } = validateCourse(req.body);
    if (error){//result.error
        res.status(400).send(result.error.details[0].message);//first element of details
        return;
    }

    const course = {
        id:courses.length+1, //id will bet set by database
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});


//5.0 update resources
app.put('/api/courses/:id', (req, res)=>{
    //Look u the course
    //if not existing, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id) )
    if(!course) return res.status(404).send('The course with the give ID was not found.')
    

    //Validate
    //if invaluda, return 400-bad request
    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body);//result.error //object destruction
    if (error){
        res.status(400).send(result.error.details[0].message);//first element of details
        return;
    }

    //Update course
    course.name = req.body.name;
    //return the updated course
    res.send(course);


});
    

function validateCourse(course){
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}


//6.0 DELETE A COURSE
app.delete('/api/courses/:id', (req, res)=>{
    //Look up the course
    //not exisitng, return 404
    const course = courses.find(c=> c.id === parseInt(req.params.id) )
    if(!course) return res.status(404).send('The course with the give ID was not found.')

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);

    //Return the same course
    res.send(course);
})

//we use 3000 as an arbitary number -> it may not work in production environment (it will dynamically assigned by hosting environment)
//PORT ->  a part of env in which process wrongs
//process object ->env variable ->
const port = process.env.PORT || 3000 ;

app.listen(port, ()=>console.log(`Listening on port ${port}...`));//function that is going to be called whe the application is called in given port