const router = require("express").Router()
const ProductController = require("../controllers/ProductController")
const zodMiddleware = require("../middlewares/ZodMiddleware")
const productvalidation = require("../ValidationSchema/ProductValidation")
router.post("/",zodMiddleware(productvalidation),ProductController.createProduct)
router.get("/",ProductController.getAllProduct)
router.put("/updateStock",ProductController.updateStockStatus)
module.exports = router;