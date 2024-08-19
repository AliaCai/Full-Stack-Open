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
        number1:0,
        number2: 0,
        number3: 0,
        sign:'+'
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
    const sign = this.state.sign;
    const calculate={
        number1:Number(this.state.number1),
        number2:Number(this.state.number2),
    }

    axios.post('http://localhost:5000/calculate/'+sign, calculate)
    .then(res=>{console.log(res.data);
                this.setState({
                    number3:Number(res.data)
                })})
    .catch(err=>console.log(err));


    console.log("number3:",this.state.number3);
   }

    render(){
    return(
        <div className="text-center form-control">
            <h1>CALCULATOR</h1>
            <form onSubmit={this.onSubmit}>
                <input 
                        type="text" 
                        required 
                        value={this.state.number1} 
                        onChange={this.onChangeNumber1} />
    
                    <select className='btn'
                            required
                             value={this.state.sign}
                             onChange={this.onChangeSign}>{

                                ['+', '-', '*','/'].map((sign)=>
                                <option key={sign} value={sign==='/'?'divide':sign}>{sign}</option>)
                    }</select>

                    <input 
                            type="text" 
                            required 
                            value={this.state.number2} 
                            onChange={this.onChangeNumber2}/>

                    <input className='btn'
                            type="submit" 
                            value="=" />
                    
                    <label>{this.state.number3}</label>
                
            </form>
        </div>

    );
};
}

