import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    //1.0 constructor-------------------------------
    constructor(props){
            //1.1
        super(props);

            //1.2
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

            //1.3
        this.state={
            username:'',
        }
    }

    //2. methods (on change)-----------------------
            //2.1
    onChangeUsername(e) {
        this.setState({
           username:e.target.value
        });
    }

            //2.2
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        console.log(user); 

        //send the user data to backend
        //send a http post request to the backend endpoint(http://localhost:5000/user/add)
        //the endpoint is expecting a json oobject in the request body -> user

        //a promise, after post do something(then) , res(result)
        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data));

        //stay on the same page, set value to be empty again so they can input a new date
        this.setState({ username:''})


    }

    //3,0 render-------------------------------------

    render () {//1 field (1 input box)
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type='text'
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}