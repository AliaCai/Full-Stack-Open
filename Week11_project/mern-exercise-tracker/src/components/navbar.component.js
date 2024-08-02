import React, {Component} from 'react';
import { Link } from 'react-router-dom';//link: link to different route

export default class Navbar extends Component { //all the component start like ths -> name of the component: Navbar
    render() {//all component need to render something
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/create" className='nav-link'>Create Exercise Log</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}


