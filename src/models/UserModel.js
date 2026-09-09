const mongoose = require("mongoose")
const Schema = mongoose.Schema //class

const userModel = new Schema({
    name : {
        type:String
    },
    age : {
        type: Number
    },
    bloodGroup : {
        type : String,
        enum : ["A+","B+","AB+","A-"]
    },
    skills : [{
        type : String,

    }],
    address : {
        type : Object,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
    },
    profilepicUrl:{
        type:String
    },
  ProfileThumb : [{
        type : String,

    }],
})

module.exports = mongoose.model("users",userModel)