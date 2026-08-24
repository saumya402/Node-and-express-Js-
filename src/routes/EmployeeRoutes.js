const router = require("express").Router()
const EmployeeController = require("../controllers/EmployeeController")
// router.get("/employee/:name/:company", EmployeeController.getEmployeeById)
router.get("/employee", EmployeeController.getAllEmp)
router.get("/Emp/:id",EmployeeController.getEmployeeById)
router.get("/Search",EmployeeController.Search)
router.post("/Emp",EmployeeController.create)
module.exports = router;
