


//upper case name -> convention for componenets

//rafce  -> set up

//import React from 'react' -> get rid of it

import PropTypes from 'prop-types'
import Button from './Button'


//stying: <h1 style={headingStyle}>{title} Tracker</h1> 


//const Header = (props) => {     -> {props.title}

/*utlize components
        <Button color='blue' text='Hello 1'/>
        <Button color='red' text='Hello 3'/>
*/
const Header = ({title}) => {
    const onClick = ()=>{
        console.log('click')
    }
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>


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
