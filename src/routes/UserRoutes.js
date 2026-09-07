const router = require("express").Router()
const userController = require("../controllers/UserControllers")
// const TestMiddleware = require("../middlewares/TestMiddleware");
const zodMiddleware = require("../middlewares/ZodMiddleware");
const uservalidate = require("../ValidationSchema/UserValidation");

router.get("/users",userController.getAllUSers)
router.get("/user/:id",userController.getUSerById)
router.get("/Search",userController.SearchUser)
// router.post("/user",TestMiddleware("Admin"),userController.CreateUser)
router.post("/user",zodMiddleware(uservalidate),userController.CreateUser)
router.delete("/user/:id",userController.DeleteUser)
router.put("/user/:id",userController.UpdateUSer)
router.put("/userByAge/:age",userController.UpdateByAge)
router.put("/userdata",userController.UpdateData)
module.exports = router;          