import React, { Component } from 'react';
//add exercise into database

export default class CreateExercise extends Component {

    //add a constructor -> 
    //call super when defning the constructor of a sub class
    //all react component class with a good constructor should sstart with a super props call

    constructor(props){
        super(props);

//MAKE THIS REFERENCE TO THE RIGHT THING--------------------------------------------------------------------------------
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);


        //set initial state of the component by assigning something into this.state
        //we need properties of the state correspond to the filed of mongodb document
        //state is how we crete VAR in react (NO let name = "beau")
        this.state ={
            username:'',
            descritopn: '',
            duration: 0,
            date: new Date(),
            users: []//we have it here, because on our page ->  dropdown menu to select all the users in database
        }
    }

    //REACT LIVE CYCLE METHOD -> react will automatically different point---------------------------------------
    componentDidMount(){//auto be called right before anything displays on the page
        this.setState({//test user
            users: ['test user'],
            username: 'test user'//auto select the first [erson in the drop down menu ]
        })
    }

//UPDATE METHODS--------------------------------------------------------------------------------
    //nenver do this.state.username = "beau" ALWAYS USE SETSTATE TO CHANGE
    //webdorm: text box to enter username -> call this function  [target -> textboox]
    onChangeUsername(e) {

        //just update username
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({//this refers to class.
            description:e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration:e.target.value
        });
    }

    //this one is diff because we use calender to select date here
    onChangeDate(date) {

        this.setState({
            date: date
        });
    }


    //INSIDE A SINGLE METHOD: CAN CREATE VARS ONLY USED WITHIN THE METHOD
    onSubmit(e) {
        e.preventDefault();//prevent defuakt html form submite behaviour

        const exercise = {
            username:this.state.username,
            description:this.state.descritopn,
            duration:this.state.duration,
            date:this.state.date
        }

        console.log(exercise)

        window.location = '/';//once submited -> take back to homepage (list of exercises)
    }

    render () {
    
        return (
    //FORM --------------------------------------------------------------------------------
    //js in {}
    //select: dropdown menu -> this.state.users comes form mongodb -> map (each element) -> option: selectbox
//add date picker component
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>UserName: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                            
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Description</label>
                        <input type="text"
                                required
                                className='form-control'
                                value={this.state.descritopn}
                                onChange={this.onChangeDescription}
                            />
                    </div>

                    <div className="form-group">
                        <label>Duration (in minuste): </label>
                        <input 
                            type="text"
                            className='form-control'
                            value={this.state.duration}
                               onChange={this.onChangeDuration}
                            />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <Datepicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <input type="submit" value="Create Exercise Log" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}