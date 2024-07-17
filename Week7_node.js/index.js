/*
const Person = require('./person'); //common js
//esx import Peroson from './person' -> does not work for now
const person1 = new Person('John Doe', 30);


person1.greeting();
// Logger -> need to be exported to use it in index

const Logger = require('./logger');
const logger = new Logger();//instantiate a logger as Logger is a class

logger.on('message', (data)=> console.log('Called Listener:', data));

logger.log('Hello World');//send a message
logger.log('Hi');//send a message
logger.log('Hello');//send a message

*/

//express simplify things up
//eg. app,get('/about', function);

//load basic webpage
const http = require('http');
const path = require("path");
const fs = require('fs');

const server = http.createServer((req,res)=>{

    /*
   // console.log(req.url);// / means request url -> / index page
   if(req.url === '/'){

    //use the fs module to open index.html
        fs.readFile
        (path.join
            (__dirname, 'public','index.html'),
            (err, content)=>{
        
                if (err) throw err;
                res.writeHead(200, {'Content-Type':'text/html'} );//write to the header, 200 response eans everything is fune
                //res.end('<h1>HOME</h1>');
                res.end(content);//server http page

    })
}


if(req.url === '/about'){

    //use the fs module to open index.html
        fs.readFile
        (path.join
            (__dirname, 'public','about.html'),
            (err, content)=>{
        
                if (err) throw err;
                res.writeHead(200, {'Content-Type':'text/html'} );//rest apit -> json rather than html
           
                res.end(content);//server http page

    })


//build some micro service some kind of rest api -> but more kiely to use express
    if(req.url === '/api/users'){//fetch data from database to serce that
        const users = [
            {name: 'Bob Smith', age:40}, //harde code api using array
            {name: 'John Doe', age:30},
        ];
        res.writeHead(200, {'Content-Type':'application/json'} );

        //turn the js array object to json
        res.end(JSON.stringify(users));




}
*/

    //build file path
    let filePath = path.join(
        __dirname, 
        "public",
        req.url=== "/" ? "index.html":req.url
    );

    console.log(filePath);

        //console.log(filePath);
        //res.end();

    //want to set up the content type
    //Exteion of file

    
    let extname = path.extname(filePath);

    //Initial Content type
    let contentType='text/html';

    //Check ext and set content type
    switch (extname) {
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;
    }
        

    //Read fike
    fs.readFile(filePath, (err, content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                //page not found -> load 404
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content)=>{
                res.writeHead(200, { 'Content-Type':'text/html'});
                res.end(content,'utf8'); //Don't type it wrong anymore
            })
           
            }else{
                //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
    }else{
        //success
        res.writeHead(200, {'Content-type':contentType});
        res.end(content,'utf8');
    }


    });
    

});

const PORT = process.env.PORT || 5000;//when we deploy this, it is decided by host -> environment var
//means look at environment var first -> run 5000 if it is not found


//attach a port
server.listen(PORT, ()=>console.log(`server running on port ${PORT}`)); 

//we ddi not create nodemon globally thats why it does not work -> npm script