//using icon as react components
// the event is stored in App.js
import {FaTimes} from 'react-icons/fa' //fa for font ausomw

const Task = ({ task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ?
         'reminder' : ''}`} onDoubleClick={() => 
    onToggle(task.id)}>
      <h3>
        {task.text}{''}
        <FaTimes 
        style={{color: 'red', cursor:
        'pointer'}} 
        onClick={()=> onDelete(task.id)}
        />
        </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
