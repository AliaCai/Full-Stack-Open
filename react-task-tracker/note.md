React -> js library for building interactive interface <-angular(framework),vue>|
-> a tree of components                                                         |                                                                        
->component based architechure                                                  |
->render the view & the view is synce with the state                            |
->little api to lean, use other libraries                                       |

application:                                                                                                |
- components(a piece of UI) (isolation, independent, reusable) (eg. root compnent, children components)     |
- implemention: js class with - state (data want to dsiaply when render),                                   |
                              - render method(react element, plain js object present DOM in meory)          |

theory:                                                                         |
(change react -> change dom [update dome])                                      |
React element -> virtual dom                                                    |
Dom element -> real dom                                                         |

______________________________________________________________________________________________________________
 npm i(install ) -g (global)

______________________________________________________________________________________________________________
______________________________________________________________________________________________________________

json server -> moke api (fake backend)

react -> js library (framework -> directly compare to angulat(built in routing system)/jsx)
-> strictly front end, runs in the borwser
(php runs on the server, app is hosted in server) (serve html template/page to the client)
-> single page app (everuthing is donw react -> complie to js budle)
-> often use with MERN stack (mongoDB, express (backedn framework), react, node.js(js runtime)) / (phthon, php, react)

library: JQuert
React -> work more like angular and vue

benifit:
-structure the "view" layer of your application (nvc)
-reusable components with their own state
-JSX - dynamic markup    (js sytax engin) (js in the format of html)
-interactive UIx with virtual DOM (update part with page without reloading everything)
-performance & testing
-easy to do data binding\

be familar with
-data types, variables, functions, loops,...
-promises & asynchronous programming
-array methods like forEach() & map()
-Fetch API & making HTTP requests

1. componenets (creating using functions vs classes)
components reder/return JSX (JavaScript Syntax Extension)
components can also take in "props"
function:
expoert const Header =()=> {
    return (
        <div>
            <h1>My Header</h1>
        </div>
    )
}

class:
export default class Header extends React.Component{
    render(){
        retur (
            <div>
                <h1>My Header</h1>
            </div>
        )
    }
}

2. componenets can have "state" 
-> how a component reders and behave

-> "App" or "global" state refers to state that is avilable to the exnteire UI
->context api, ... (a lot of things help to manage status)
->have to use class componenets if we want to hold state, function (hook -> use status without function component)

3. React Hooks
 -> are functions that let us hook into the React state and lifecycle features from function componenets

3.1 useState -> returns a stateuful value and a function to update it
3.2 useEffect -> Perform side effects in function components (eg. make hph request when the website load)
3.3 useContext, useReduce, useRef -> Beyong the scope of this course


4.terminal
 % npx create-react-app (run create-react-app rather than dwloading it)
 % cd react-task-tracker
 % code . (open vs code in current widown)
 % npm i react-icons
 % npm run build -> creat an optimize production build -> a ofolder called build -> static asset -> the part you deployed -> way to push for production

 local
 % sudo npm i -g serve  -> basic http server
 % serve -s build -p 8000  -> porter 8000, local 3000 ->  dev server ->production build, what we will deploy
react dom-> responsible for rendering react app to document object model (to the borwser)
react native (same library, have reat native rather than react dom)


mock up back end
 % cd     ->install locally -> package.json
 % npm run server
(% npm ls json-server    )
 % npm start


 routing
  % npm i react-router -dom
___________________________________________________________________________________
table of content:
1. connect conponent (rafce) js with app. js
2. how to pass variable from app.js (props, ({title}))
    2.1 how to set default prop type
    2.2 how to set prop type (for robust coding)
3. doing css in component js (1. {{}, 2. const headingStyle={}})
4. Exercise: change button color and text according to the props, padding down event object
5. using map to loop an array -> give a list -> unique id
          {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
      ))}


      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
        )
      )
5. use hook
        import { useState } from 'react'
        const [tasks, setTasks] =useState([])    -> setTasks is used to change tasks
6. passing function from app.js to task.js to delete something
7. tasks filter(()=>()) -> how to delete things using filter (different id)
             setTasks(tasks.filter((task) => task.id !== id))
8. double click -> reverse the reminder
9. adding green  bar in the front according the the reminder
         <div className={`task ${task.reminder ?
         'reminder' : ''}`}>

         `task ..` ->mean task is unchanged
10. adding new task, dat&time and reminder (randomrize the id) using save Task
11. add and close the part of addTask and change the color of the btn
12. production build (npm)
13. json server (mock up  backend)
    npm install -g json-server                    ->  "json-server": pop up in packkage.json
    
    package.json:

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch db.json --port 5000" //pretend it is a real back end
  },

  create db.json
  npm run server (airply is 5000)
  npm start      -> run react dev server

http://localhost:5000/tasks

14. fetch data from db.json and display them

        step1: fetch task

        //takes in an arrow function, fetch api, asycn away
        useEffect(( )=>{
            const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()

            console.log(data)
            }

            fetchTasks()
        }, [])

        //,[] -> dependency array -> avalue run, something change

  step 2 take out fetchTasks
        //takes in an arrow function, fetch api, asycn away
        useEffect(( )=>{
            const getTasks = async () =>{
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
            }

            getTasks()
        }, [])


        // Fetch Tasks

        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()

            return data
        }

15. delete from backend

    //Delete Task
    const deleteTask = async (id) =>{
      await fetch(`http://localhost:5000/tasks/${id},`, {
        method: 'DELETE'
      }) //second arugument - specifice the metho
      //console.log('delte',id)
      setTasks(tasks.filter((task) => task.id !== id))
    }
16. add tasks
17. set remind
18. Routing 

no routing in the core library  

 % npm i react-router -dom   -> show up in package.json



19. Add a footer -> link to about page with about component
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // to use router we need to wrap everything in output

return(<Router></Router>)

Router -> Routes -> Route

20. Making button show only in the/ page
import {useLocation} from 'react-router-dom' //look at the route we are currently on
  const location = useLocation() //access location.pathname

  return (
    <div className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && <Button 
        color={showAdd? 'red':'green'}
        text={showAdd? 'Close' : 'Add'}
        onClick={onAdd}/>}


    </div>


______________________________________________________________________________________________________________
______________________________________________________________________________________________________________

npm run server
npm start




