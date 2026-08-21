const router = require("express").Router()
const userController = require("../controllers/UserControllers")

router.get("/users",userController.getAllUSers)
router.get("/user/:id",userController.getUSerById)
router.get("/Search",userController.SearchUser)

module.exports = router;