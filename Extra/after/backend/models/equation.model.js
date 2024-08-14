const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const equScema= new Schema({
    number1: {type:Number, required: true, trim: true},
    number2: {type: Number, required:true, trim: true},
    number3: {type: Number, required: true, trim: true},
    sign: {type: String, required:true, trim:true}
}, {
    timestamps:true 
})

const Equation = mongoose.model('Equ', equScema);

module.exports=Equation;