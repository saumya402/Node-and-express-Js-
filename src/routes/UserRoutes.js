const router = require("express").Router()
const userController = require("../controllers/UserControllers")

router.get("/users",userController.getAllUSers)
router.get("/user/:id",userController.getUSerById)
router.get("/Search",userController.SearchUser)
router.post("/user",userController.CreateUser)
router.delete("/user/:id",userController.DeleteUser)
router.put("/user/:id",userController.UpdateUSer)
router.put("/userByAge/:age",userController.UpdateByAge)
module.exports = router;          