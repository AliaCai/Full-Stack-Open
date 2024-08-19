import React, {Component} from 'react';
import axios from 'axios';


const Equ = props =>{
    <div>
    <h2>run</h2>
    <tr>
        <td>{props.equ.number1} {props.equ.number2} = {props.equ.number3}</td>
        <td>delete</td>
        <td>edit</td>
    </tr>
    </div>
}


export default class Library extends Component{
    constructor(props){
        super(props);
       // this.deleteEqu=this.deleteEqu.bind(this);
       //this.updateEqu=this.deleteEqu.bind(this);
        this.state={
            equations:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/library/')
        .then(res=> {console.log(res, res.data);this.setState({equation:res.data})})
        .catch(err=>console.log(err));
    }

    equationList(){
        return this.state.equations.map(equ=>{
            return <h2>dpecial</h2>//<Equ euqation={equ} key={equ._id}/>

        })
    }
    render(){
        return(
            <div>
                <h2>Library</h2>
                <table>
                    <thread>
                    <tr>
                        <th>_</th>
                        <th>_</th>
                        <th>_</th>
                    </tr>
                    </thread>
                    <tbody>
                    {this.equationList()}
                    </tbody>
                </table>


            <h2>end</h2>
            </div>

        );
    };
};