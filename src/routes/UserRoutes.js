const router = require("express").Router()
const userController = require("../controllers/UserControllers")

router.get("/users",userController.getAllUSers)
router.get("/user/:id",userController.getUSerById)

module.exports = router;