import React, {Component} from 'react';
import axios from 'axios';


const Equ = props =>(

    <tr>
        <td>{props.equ.number1} {props.equ.sign=='divide'? '/': props.equ.sign} {props.equ.number2} = {props.equ.number3}</td>
        <td onClick={()=>props.deleteEqu(props.equ._id)}>delete</td>
        <td> | </td>
        <td>edit</td>
    </tr>

)


export default class Library extends Component{
    constructor(props){
        super(props);
        this.deleteEqu=this.deleteEqu.bind(this);
       //this.updateEqu=this.deleteEqu.bind(this);
        this.state={
            equations:[]
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
        console.log('run key');
        axios.delete('http://localhost:5000/library/'+key)
        .then((res)=>{console.log(`${key} is deleted!`)})
        .catch(err=>console.log(err));

        window.location='/';
    }


    render(){//<table> -> 1. <thead> <tr> <th> 2. </table> <tr> <td>
        return(
            <div>
                <h2>Library</h2>
                <table>

                    <tbody>
                    {this.equationList()}
        
                    </tbody>

                </table>


            <h2>end</h2>
            </div>

        );
    };
};