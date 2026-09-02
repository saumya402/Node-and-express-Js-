
const UserModel = require("../models/UserModel")
const userModel = require("../models/UserModel")
const mailSend = require("../utilites/MailUtils")
const getAllUSers = async (req, res) => {
    const users = await userModel.find()
    res.json({ message: "get all users..", data: users })
}
const getUSerById = async (req, res) => {
    const id = req.params.id;

    // const foundUser = await userModel.findOne({_id : id})
    const foundUser = await userModel.findById(id)
    if (foundUser) {
        res.json({ message: "User found ", data: foundUser })
    } else {
        res.json({ message: "User not found " })
    }

}
const SearchUser = async (req, res) => {
    const data = req.query;
    res.json({ data: data })
}
const CreateUser = async(req,res)=>{
    try{
    // console.log("Req body",req.body)
    
    const savedUser = userModel.insertOne(req.body)
     //mailSend(req.body.email,"","")
     await mailSend(req.body.email,"Testing royal","hi someone from me")
    res.json({message : "Data fetch from postman",data:savedUser})
    }
    catch(err) {
        res.json({err:err})
    }
}
const DeleteUser = async(req,res)=>{
    const id = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(id,{new : true})
    if(deletedUser){
        res.status(200).json({
            message : "User Deleted Successfully",
            data : deletedUser,
        })
    }else{
        res.status(400).json({
            message : "User not found"

        })
    }
}
const UpdateUSer = async(req,res)=>{
    const id = req.params.id;
   
    try{
        const UpdatedUser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
       
        if(UpdatedUser){
            res.json({
                message : "User Updated Successfully!!",
                data : UpdateUSer
            })
        }else{
            res.json({
                message : "User Not updated"
            })
        }

    }catch(err){
        res.json({
            message : "user upated ... fail"
        })
    }
}
const UpdateByAge = async(req,res)=>{
    const age = req.params.age;
    const body = req.body;
    const UpdateMany = await userModel.updateMany({age : {$gte :  age}},{$set : body})
    if(UpdateMany){
        res.status(200).json({
            message : "Updated Successfully",
            data : UpdateMany
        })
    }else{
        res.json({
            message : "Not found"
        })
    }
}

const UpdateData = async(req,res)=>{
    try{

    const data = req.query.id;
   
    if(data){
    const UpdatedData = await UserModel.findByIdAndUpdate(data,req.query)
    if(UpdatedData){
        res.status(200).json({
            message : "Data Modified ",
            data : UpdatedData
        })
    }else{
        res.json({
            message : "Not found"
        })
    }}
    else{
        res.json({
            message : "Id not found"
        })
    }
    }catch(err){
        res.json({
            message : "Err ",
            err : err
        })
    }
}
module.exports = {
    getAllUSers, getUSerById, SearchUser,CreateUser,DeleteUser,UpdateUSer,UpdateByAge,UpdateData
}