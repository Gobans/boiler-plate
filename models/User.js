const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength :50
    },
    email:{
        type : String,
        trime : true,
        unique: 1
    },
    lastame :{
        type: String,
        maxlength :30
    },
    role:{
        type: Number,
        default : 0
    },
    image: String,
    token: {
        type : String
    },
    tokneExp:{
        type : Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}