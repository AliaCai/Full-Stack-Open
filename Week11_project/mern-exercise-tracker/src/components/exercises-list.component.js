//2 components in this document
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//EXERCSE COMPONET (under exerciseList())------------------------------- FUNCTIONAL REACT COMPONENT (lack of state [state] and life cycle methods [componentDidMount])
//accept props and return jsx
const Exercise = props => (//3 thins in props


    //link -> load another componenet on the page 
    //deleteExercise method is passed in
    //a    or    button style as a link
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
)

//--------------------------------------------------------------------------------------------- CLASS COMPONENT
//homepage of app -> show all the added exercise
export default class ExercisesList extends Component {

    constructor(props){
        super(props);

        this.deleteExercise=this.deleteExercise.bind(this);
        

        this.state={
            exercises:[]//empty array of exercise
        };
    }
        
                    //run before the page run
        componentDidMount(){ 
            axios.get('http://localhost:5000/exercises/')
            .then(response =>{
                this.setState({exercises:response.data})//in this case we want all the fields of exercise and put into exercise array
            })
            .catch((error)=>{
                console.log(error);
            });  
        }

        //object id we are going to delete
        deleteExercise(id){
            axios.delete('http://localhost:5000/exercises/'+id)
                .then(res=>console.log(res.data));


            this.setState({
                exercises:this.state.exercises.filter(el => el._id !== id)//_id becuase it is the one created by mongodb
            });

        }

        exerciseList(){
            return this.state.exercises.map(currentexercise =>{

                //return exercise component -> a row of the table -> passes in 3 props
                return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
            })
        }

    render () {
        //body is going to call exerciseList() method -> return the role of table
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}