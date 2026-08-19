const router = require("express").Router()
const EmployeeController = require("../controllers/EmployeeController")
router.get("/employee/:name/:company", EmployeeController.getEmployeeById)
module.exports = router;