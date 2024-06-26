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
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)

  const [tasks, setTasks] =useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text:'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id:3,
        text:'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },])

    //Add Task
    const addTask =(task)=>{
      const id=Math.floor(Math.random()*1000)+1; //give a randome number
      const newTask={id, ...task} //...task what we have in task
      setTasks([...tasks, newTask])

    }

    //Delete Task
    const deleteTask =(id) =>{
      //console.log('delte',id)
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder} : task
        )
      )
      console.log(id);
    }


    //{showAddTask && ...}if showAddTask is true then ...
  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
     { tasks.length >0 ? <Tasks tasks={tasks}
      onDelete={deleteTask}
       onToggle={toggleReminder}/>: (
        'No Tasks To Show'
      )}
  
    </div>
  )
}

export default App
