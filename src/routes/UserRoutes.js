const router = require("express").Router()
const userController = require("../controllers/UserControllers")
// const TestMiddleware = require("../middlewares/TestMiddleware");
const a = require("../middlewares/AuthMiddleware")
const zodMiddleware = require("../middlewares/ZodMiddleware");
const uservalidate = require("../ValidationSchema/UserValidation");
const uplaod = require("../middlewares/UploadMiddleware")
// router.get("/users",userController.getAllUSers)
router.get("/users",a,userController.getAllUSers)
router.get("/user/:id",userController.getUSerById)
router.get("/Search",userController.SearchUser)
// router.post("/user",TestMiddleware("Admin"),userController.CreateUser)
// router.post("/user",zodMiddleware(uservalidate),userController.CreateUser)
router.post("/multiple",uplaod.single("file"),userController.CreateMultipleUser)
router.post("/user",uplaod.array("file"),userController.CreateUser)
router.delete("/user/:id",userController.DeleteUser)
router.put("/user/:id",userController.UpdateUSer)
router.put("/userByAge/:age",userController.UpdateByAge)
router.put("/userdata",userController.UpdateData)
router.post("/login",userController.LoginUser)
module.exports = router;          