

const userModel = require("../models/UserModel")
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
    // console.log("Req body",req.body)
    res.json({message:"ok"})
    const savedUser = userModel.insertOne(req.body)
    res.json({message : "Data fetch from postman",data:savedUser})
}


module.exports = {
    getAllUSers, getUSerById, SearchUser,CreateUser
}