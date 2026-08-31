const router = require("express").Router()
const ProductController = require("../controllers/ProductController")

router.post("/",ProductController.createProduct)
router.get("/",ProductController.getAllProduct)
router.put("/updateStock",ProductController.updateStockStatus)
module.exports = router;