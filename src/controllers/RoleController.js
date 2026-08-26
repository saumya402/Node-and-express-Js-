const RoleModel = require("../models/RoleModel")

const CreateRole = async(req,res)=>{
    try{
        res.json({message : "ok"})
       const savedRole = RoleModel.insertOne(req.body)
        res.json({message : "Data Created",data:savedRole})
    }
    catch(err){
        res.json({err:err})
    }
}
const getAllRoles = async(req,res)=>{
    try{
        const roles = await RoleModel.find()
        res.json({message : "All roles get",data : roles})
    }
    catch(err){
         res.json({err:err})
    }
}

module.exports = {
    CreateRole,getAllRoles
}