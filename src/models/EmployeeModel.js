const mongoose = require("mongoose")
 const Schema = mongoose.Schema
 const EmployeeModel = new Schema({
        name : {
            type : String
        },
        salary : {
            type : Number
        },
    
 })
 
 module.exports = mongoose.model("Employees",EmployeeModel)