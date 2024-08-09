


//upper case name -> convention for componenets

//rafce  -> set up

//import React from 'react' -> get rid of it

import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom' //look at the route we are currently on
import Button from './Button'

//stying: <h1 style={headingStyle}>{title} Tracker</h1> 


//const Header = (props) => {     -> {props.title}

/*utlize components
        <Button color='blue' text='Hello 1'/>
        <Button color='red' text='Hello 3'/>
*/
const Header = ({title, onAdd, showAdd}) => {

  const location = useLocation() //access location.pathname


  return (
    <div className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && <Button 
        color={showAdd? 'red':'green'}
        text={showAdd? 'Close' : 'Add'}
        onClick={onAdd}/>}


    </div>
  )
}


// set  default  props
Header.defaultProps = {
    title: 'Task Tracker',
}


// set  prop type
//isRequired -> can be remove , compusory
Header.propTypes={
    title: PropTypes.string.isRequired,
}

/* CSS IN JS
const headingStyle = {
    color:'red', 
    backgroundColor:'black'

}
*/
export default Header
