//main react app we are going to display on our page
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; //put everything want to be used router inside router element
import "bootstrap/dist/css/bootstrap.min.css"

//components
import Navbar from "./components/navbar.component.js";
import ExerciseList from "./components/exercises-list.component.js";
import EditExercise from "./components/edit-exercise.component.js";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component.js";

function App() {
  return (//wer have a router element for each route of that application
    //a few components:  navbar, ExerciseList, EditExercise, CreateExercise, CreateUser
    //we have a route element for each rout in the application
    
    //go to path, load component
    //react router -> map specific url path to different component that is gping to load
    <Router>
      <div className='container'>
        <Navbar />
        <br/>
        <Routes> 
          <Route path='/' exact element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
