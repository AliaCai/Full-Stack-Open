Table of Content:

- MongoDB atlas
- backend of exercise tracker app
- ftont end
- connect frontend to the backend

Application - Exercise Tracker Applcation:
- Application will contain
1. Exercises
2. Users
- Every exercise has one user

MERN:
1. MongoDB: a document-based open source database
< Mongose: Simple, schema-based solution to model application date (easier to use mongoDB and node.js)
2. Express: a web application framework for node.js (web server)
3. React: a js ront-end library for building user interfaces
4. Node.js: Js run-timr environment that executes js code outside of a browser (such as a server)


Database:
Tabular/relational -> MondoDB (all data us rekational)
Database -> database
Table -> collection
Row -> Document
Index -> index
Join -> $lookup
Forein Key -> reference


**MongoDB**
MongoDB documents (look like json) -> store in bsyon format (binary json)
{
    name: "string"
    title:
    address: { //->nested document
        address 1:
        city:
        state:
        postal_code:
    }
    topics: ["array",""]
    employee_number: 1234 //integer
    locationL [12,12] //geo spatial cordinates

}

**MongoDB atlast**
1. create cluster

username: heyuncai10
password: mZ7zdvgD1cZ51q5A

connection method > drivers
check mongodb:  mongod -version


> npx create-react-app mern-exercise-tracker
can run create-react-app without downloading it

mongodb object id:
- generate by driver (we can also define our own)
- unqiues across the collection
ObjectId("UNIX Timestamp + Random Value + Count)

> cd mern-exercise-tracker

(normally to start a react development web server > npm start)

Our step: 1. create backend + connect to mongodb atlas, google cloud + react

**express**
>mkdir backend 
>cd backend
> npm init -y
> npm install express cors mongoose dotenv

cors: cross orgin resource sharing -> allow ajax request to skip the origin polocy and access resources from remot host
cors package: express midleless enable cores with different options, access something outside of server from our server

mogoose: interact mogodb through node js

dotenv: load environmental variable from .emb file and process .emb (instead set environment variale on development nachine, can store in a file)


> sudo install -g nodemon 
> touch server.js
> touch .env

2. (get connection url from mongodb atlas)
inside .env variable = mongodb atlas string

3. create db schema using mongoose (exercise, user)

> mkdir models
> cd models
> touch exercise.model.js
> touch user.model.js

4. create api endpoint route so the server can process crud operation (use postman)
> ..
> mkdir routes
>cd routes
> touch exercises.js
> touch users.js

42:40 https://youtu.be/7CqJlxBYj-M?si=4XUEIUEIoeNnhwjQ



**react**
**go to /public/index.html**
- decalrative, efficient, flexible js library
- build based on components (tell react what we want to see on the screen)
- when date changed, react will efficiently reupdate the component pass
- component(props) -> heriachy of views to display through the render method
- jsx (convert to html when it goes through preprocessing) (come with full power of js in {})

render method return the description you want to see on the screen
```
class ShoppingList extends React.Component {
    render () {
        return (
            <div className = "shopping-list">
                <h1> Shopping List for {this.props.name} </h1>
                <ul>
                    <li>Cereal</li>
                    <li>Milk</li>
                    <li>Bananas</li>
                </ul>
            </div>
        
        );
    }
}
// Example usage: <ShoppingList name="Beau">
```


> npm start
> npm install bootstrap
> npm install react-router-dom [make it easier to route differet url to different component]

5. go to src to create components folder and component(...component.js) inside

55:31 https://youtu.be/7CqJlxBYj-M?si=4XUEIUEIoeNnhwjQ [start to set up navbar.component.js]


6. create navbar.component.js first and other components later on

'''
//Basic component file


import React, { Component } from 'react';

export default class ExercisesList extends Component {
    render () {
        return (
            <div>
                <p>You are on the Exercises List component!</p>
            </div>
        )
    }
}

'''





7. connect components to app.js

-1:13:42

>npm install react-datepicker

-1:14:31


8. connect front end to back end
- front end to send http request to the server endpoint in the backend
- asiox library

>npm install axios

portal: 5000 backend
portal: 3000 frontend



----------------------------
backend: >nodemon server
front end: >npm start