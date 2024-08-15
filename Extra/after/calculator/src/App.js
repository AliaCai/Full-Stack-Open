import React from 'react';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; -> i do not need router for this project lol (router-> routes -> route)

import Calculator from './components/calculator.component';
import Library from './components/library.component';

function App(){
  return( 

    <div className='page'>
   <Calculator />
   <Library />
   </div>

  )
}

export default App;