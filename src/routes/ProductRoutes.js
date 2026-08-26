const router = require("express").Router()
const ProductController = require("../controllers/ProductController")

router.post("/",ProductController.createProduct)
router.get("/",ProductController.getAllProduct)

module.exports = router;