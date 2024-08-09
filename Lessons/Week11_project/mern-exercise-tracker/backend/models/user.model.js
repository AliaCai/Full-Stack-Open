//monggose schema

const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: { //1 field
        type: String,
        required: true, //validation
        unique: true,
        trim: true, //trime whitespace in the end
        minlength: 3 //at least 3 characters long

    },
}, {
    timestamps: true, //auto create fields when where is create/modilied
})

const User = mongoose.model('User',userSchema); //'User' can be anything, the name we are going to use

module.exports=User;