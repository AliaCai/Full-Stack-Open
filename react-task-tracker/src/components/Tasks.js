
/* //map
const tasks = [
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
    },
]



// for each, map (take in some function), filter -> from js
//.map output jsx that is called list -> parent of the list is (h3), something unique
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
*/

// [tasks, ] still use .map -> instead outsid of component, not is is a part of component state
//change anymoe part of state -> use setTasks   -> will not do tasks.push() as tasks is immutable -> new to create it
//    setTasks([...tasks, {}])
//use context.api ... to store the stae


// map:       {tasks.map((task) => (
//      <h3 key={task.id}>{task.text}</h3>

//   ))}
import { useState } from 'react'
import Task from './Task'


const Tasks = ({tasks, onDelete, onToggle}) => {

  return (

    <>
      {tasks.map((task) => (
      <Task
       key={task.id} 
       task={task} 
       onDelete={onDelete} 
       onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks