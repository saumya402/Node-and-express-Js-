const EmployeeModel = require("../models/EmployeeModel")
const getEmployeeById = (req, res) => {
    res.json({ message: `Person is ${req.params.name} company ${req.params.company}` })
}
const getAllEmp = async (req, res) => {
    const Emp = await EmployeeModel.find()
    res.json({ message: "Employee Fetched", data: Emp })
}
module.exports = {
    getEmployeeById, getAllEmp
}