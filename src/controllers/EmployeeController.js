const getEmployeeById = (req,res)=>{
    res.json({message : `Person is ${req.params.name} company ${req.params.company}`})
}
module.exports = {
    getEmployeeById
}