const router = require("express").Router()
const EmployeeController = require("../controllers/EmployeeController")
// router.get("/employee/:name/:company", EmployeeController.getEmployeeById)
router.get("/employee",EmployeeController.getAllEmp)
module.exports = router;