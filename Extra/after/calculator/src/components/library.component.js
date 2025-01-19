import React, {Component} from 'react';
import axios from 'axios';
import '../styling/library.css'
import {Link} from 'react-router-dom'


const Equ = props =>(

    <tr>
        <td class='col1'>{props.equ.number1} {props.equ.sign=='divide'? '/': props.equ.sign} {props.equ.number2} = {props.equ.number3}</td>
        <td class='col2' onClick={()=>props.deleteEqu(props.equ._id)}>delete</td>
        <td class='sep'> | </td>
        <td class = 'col3'><Link to={{pathname: `/edit/${props.equ._id}`, state:{id:`${props.equ._id}`}}} >edit</Link></td>
    </tr>

)

//Link to {{pathname: `/edit/${props.equ._id}`, state:{id:`${props.equ._id}`}}}
export default class Library extends Component{
    constructor(props){
        super(props);
        this.deleteEqu=this.deleteEqu.bind(this);
        this.updateEqu=this.deleteEqu.bind(this);
        this.state={
            equations:[],
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/library/')
        .then(res=> {console.log(res, res.data);
                        this.setState({equations:res.data})})
        .catch(err=>console.log(err));
    }

    equationList(){//this function does not run
        console.log('hii:', this.state.equations);
        return this.state.equations.map(equ=>{
            
            return <Equ equ={equ} key={equ._id} deleteEqu={this.deleteEqu}/>

        })
    }

    deleteEqu(key){
        axios.delete('http://localhost:5000/library/'+key)
        .then((res)=>{console.log(`${key} is deleted!`)})
        .catch(err=>console.log(err));

        window.location='/';

    }


    render(){//<table> -> 1. <thead> <tr> <th> 2. </table> <tr> <td>
        return(
            <div style={{ height: '35em', overflow: 'scroll' }} class='library'>
                <h2>Library</h2>
                <table>

                    <tbody>
                    {this.equationList()}
        
                    </tbody>

                </table>
            </div>

        );
    };
};