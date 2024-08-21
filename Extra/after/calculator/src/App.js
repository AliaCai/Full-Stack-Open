import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //i do not need router for this project lol (router-> routes -> route)
import "bootstrap/dist/css/bootstrap.min.css"


import Calculator from './components/calculator.component';
import Library from './components/library.component';
import Edit from './components/edit.component'

function App(){
  return( 
    <Router>
      <div className='page'>
       <Calculator />

        <Routes>
        <Route path ='/' element = {<Library />} />
        <Route path='/edit/:id' element = {<Edit  />}/>
        </Routes>
      
   </div>

    </Router>


  )
}

export default App;