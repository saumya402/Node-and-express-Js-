const router = require("express").Router()
const categoryController = require("../controllers/CategoryController")

router.post("/",categoryController.CreateCategory)
router.get("/",categoryController.getAllCategory)

module.exports = router;
