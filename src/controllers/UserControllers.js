

const userModel = require("../models/UserModel")
const getAllUSers = async(req, res) => {
    const users = await userModel.find()
     res.json({message:"get all users..",data:users})
}
const getUSerById = (req,res)=>{
    res.json({message : `Value in wildcard id ${req.params.id}`})
}


module.exports = {
    getAllUSers,getUSerById
}