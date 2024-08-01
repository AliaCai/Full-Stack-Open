//main react app we are going to display on our page
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"; //put everything want to be used router inside router element
import "bootstrap/dist/css/bootstrap.min.css"

//components
import Navbar from "./components/navbar.component.js";
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (//wer have a router element for each route of that application
    //a few components:  navbar, ExerciseList, EditExercise, CreateExercise, CreateUser
    //we have a route element for each rout in the application
    
    //go to path, load component
    //react router -> map specific url path to different component that is gping to load
    <Router> 
      <Navbar />
      <br/>
      <Router path="/" exact component={ExerciseList} />
      <Router path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
