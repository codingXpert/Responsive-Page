const mongoose = require('mongoose');
const validator = require('validator'); // to check email is valid or not

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        minLength:3
    },

    email:{
        type:String,
        required:true,
        validate(value){   //getting the email entered by user in the variable "value"
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },

    phone:{
        type:Number,
        required:true,
        min:10
    },

    message:{
        type:String,
        require:true,
        minLength:3
    }

});


// now  we need to craete a collection
const User = mongoose.model("User" , userSchema);  //the first argument is collection name(i.e, User) and the 2nd argument is defined schema(i.e, userSchema)

module.exports = User;