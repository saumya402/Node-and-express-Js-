const EmployeeModel = require("../models/EmployeeModel")
const getEmployeeById = async(req, res) => {
    const id = req.params.id;
    const Employee = await EmployeeModel.findById(id)
    if(Employee){
        res.json({message : "Employee found",data:Employee})
    }
    else{
        res.json({message : "Employee not found"})
    }
}
const getAllEmp = async (req, res) => {
    const Emp = await EmployeeModel.find()
    res.json({ message: "Employee Fetched", data: Emp })
}
const Search = async(req,res)=>{
        const data = req.query;
        res.json({data : data})
        
}
const create = async(req,res)=>{
     res.json({message:"ok"})
    const Fetch = await EmployeeModel.insertOne(req.body)

    res.json({message : "Done",data : Fetch })
}

module.exports = {
    getEmployeeById, getAllEmp , Search , create
}