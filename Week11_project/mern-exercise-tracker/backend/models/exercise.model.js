//monggose schema

const { default: mongoose } = require('mongoose');
const monggose=require('mongoose');
const Schema=monggose.Schema;

const exerciseScema=new Schema({ //4 fields
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type:Date, required: true},
}, {
    timestamps: true,
})

const Exercise = mongoose.model('Exercise', exerciseScema);

module.exports = Exercise;