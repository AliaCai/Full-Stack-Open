import React, { Component } from 'react';
import axios from 'axios';

export default class Calculator extends Component{
   constructor(props){
    super(props);

    this.onChangeNumber1=this.onChangeNumber1.bind(this);
    this.onChangeNumber2=this.onChangeNumber2.bind(this);
    this.onChangeSign=this.onChangeSign.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        number1:NaN,
        number2: NaN,
        number3: NaN,
        sign:''
    }
   }

   onChangeNumber1(e){
    this.setState({
        number1:e.target.value
    })
    console.log(e)
    console.log(e.target)
   }

   onChangeNumber2(e){
    this.setState({
        number2:e.target.value
    })
   }

   onChangeSign(e){
    this.setState({
        sign:e.target.value
    })
   }

   onSubmit(e){
    e.preventDefault();
    const {sign} = this.props.params;

    const calculate={
        number1:this.state.number1,
        number2:this.state.number2,
    }
    axios.push('http://localhost:5000/calculate/'+sign, calculate)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));


   }

    render(){
    return(
        <div>
            <h1>calculator</h1>
            <form>

            </form>
        </div>

    );
};
}

