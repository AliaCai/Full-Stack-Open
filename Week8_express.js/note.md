EXPRESS

DOCUMENTARY: https://expressjs.com/en/api.html
Express is a node js web application framework 


How to use gitignore to not include node modules: https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files
git rm -r --cached FILENAME <Week8_express.js/node_modules>


- express is a web framework for node.js (unperformance, not high level)
- Express is a "server-side" or "back-end" {react, angular -> client side framwork} 
- -> used in combination with other framework
- ->data: usually json

benifit:
- makes building web applications with node.js much easier (hand request easier)
- used for both server rendered apps as well as api/microwavices
- js

other techniquest:
- http status codes -> request, send back response
- json -api
- high order array methods - for each, map, filter
- arrow functions


basic syntax
//------------------------------------------------------------------
const express = require('express');

//Init express
const app = express();

//Create your endpoints/route handers
app.get('/', function(req, res){
    res.send('Hello World!');

    //FETCH FROM DATABASE (MOGODB IS POPULAR)
    //LOAD PAGES   
    //RETURN JSN
    //FULL ACCESS TO REQUEST   (http request properteis eg. url param, query string, any data sent within body) 
                    & RESPONSE    (http response -> you use this object to send back eg. redirect,...)
}); 


*Handling requests/routs is simple*
*app.get(), app.post(), app.put(), app.delete().etc*
*express has a router so we can store routes in seperate files and export*
*we can parse incoming data with the Body Parser*

//Listen on a port
app.listen(5000);
//------------------------------------------------------------------

middleware functions: func have access to req and resp
-> come with express/express/write your worn
-> capable exeute any code,
            make changes to the request/resp object, 
            end response cycle, 
            call next middleware in the stack


use postman -> http clinet to make request to a server (get, put, delete)


>npm init -y  [CREATE PACAKGE.JSON WITHOUT ASKING ANY QUESITONS]
>npm i express [install express, add to package.kson]
>node (filename)


Cannot GET / -> cannot find a route hander for /    ->  haven't created any endpoint

>npm i -D nodemon  [-D DEV DEPENDENCY BECAUSE IT IS ONLY FOR DEVELOPMENT NOT PRODUCTION]
package.json
  "scripts": {
    "start": "node index",//node depolyment
    "dev":"nodemon index"

  },

>npm run dev




1. Create a router -> write in html/read a file
2. make public static foler
3. getting url with name
4. getting a single meber through id (return meg if id dne)
5. member api routes
6. add a member (post)
7. update a member
8. delete member
9. renderinf template using template engine (handlebars)


midleware function that has access to req and res -> you can change/add things
midlesware: res, req, next

>npm i moment [DEAL WITH DATE]


not all routes be api sercing json
routes may serve service template

>npm i uuid



mongodb:
install mogu -> connect to database -> members.save(newMember) instead of push

>npm i express-handlebars
[documentary](https://github.com/express-handlebars/express-handlebars)


passportlocal
//www.passportjs.org/packages
//not built in authentication