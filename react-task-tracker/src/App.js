/*

//import React from 'react' // for class
import Header from './components/Header'


//label form -> htmlFor
//jsx -> 1 parent element -> other components GO INSIDE (<></> also works)

//classname compied to  html class

//under return:<h2>Hello {x? 'Yes': 'No'}</h2>



//passing in a num/ boon -> {} around

//padding argument:  <Header title='Hello'/> 
function App() {// root wrap around it

  const name = 'Brad'
  const x=false

  return (
    <div className="App" className="container"> 
      <Header />
    </div>

  );
}


//class
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}


export default App;
*/

//keep tasks here, other components can use it as well
import {useState, useEffect} from 'react'  //useEffect usually want somehing happens when the page loads
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' // to use router we need to wrap everything in output

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)

  const [tasks, setTasks] =useState([])

//---------------------Fetching---------------------------
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

    console.log(data)

    return data
  }

  //---------------------Adding---------------------------
  //,[] -> dependency array -> avalue run, something change
    //Add Task
    const addTask = async(task)=>{
      //const id=Math.floor(Math.random()*1000)+1; //give a randome number
      //const newTask={id, ...task} //...task what we have in task
      //setTasks([...tasks, newTask])


      // we do not neec reate id bc is creates automatically for us
      const res = await fetch('http://localhost:5000/tasks', {
        method:'POST',
        headers : {
          'Content-type': 'application/json'
        },
        body :  JSON.stringify(task)
      })

      const data = await res.json()
      setTasks([...tasks, data])
    }
    

//---------------------Delete---------------------------

    //Delete Task
    const deleteTask = async (id) =>{
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      }) //second arugument - specifice the metho
      //console.log('delte',id)
      setTasks(tasks.filter((task) => task.id !== id))
    }
  //---------------------Reminder---------------------------

    //Toggle Reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, 
                        reminder: ! taskToToggle.reminder}
//put ->update, header -> sending data(content type), body-> data we are sending
      const res = await fetch(`http://localhost:5000/tasks/${id}`,{ 
        method: 'PUT',
        header:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
    })

    const data = await res.json() //we get it updated task


      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        data.reminder} : task
        )
      )
      console.log(id);
    }

     // Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    console.log(data)

    return data
  }


    //{showAddTask && ...}if showAddTask is true then ...
  return (
    <Router>
      <div className='container'>
        <Header onAdd={()=>setShowAddTask(!showAddTask)}
          showAdd={showAddTask}/>

          <Routes>
            <Route
              path='/' 
              element={ 
                <>       
                  {showAddTask && <AddTask onAdd={addTask}/>}
                  { tasks.length >0 ? <Tasks tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}/>: (
                      'No Tasks To Show')}
                    </>} />
            <Route path='/about' element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
