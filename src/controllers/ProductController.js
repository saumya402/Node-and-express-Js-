const ProductModel = require("../models/ProductModel")

const createProduct = async (req, res) => {
    try {
        const savedProduct = await ProductModel.create(req.body)
        res.status(201).json({
            message: "Data saved Successfully",
            data: savedProduct
        })
    }
    catch (err) {
        res.json({
            message: "Error while creating product"
        })
    }
}
// const createProduct = async(req,res)=>{
    // try{
        // // const savedProduct = await ProductModel.create() or 
        // const SavedProduct = await ProductModel.insertOne(req.body)
        // res.status(201).json({
        //     message : "Data added successfully",
        //     data : SavedProduct
        // })
        // catch(err){
        //     res.json({
        //         message : "Error while creating product"

        //     })
        // }
    // }
    // 
    // }

const getAllProduct = async (req, res) => {
    try {
        const Products = await ProductModel.find().populate("categoryId")
        if (Products.length > 0) {
            res.json({
                message: "products fetched ",
                data: Products
            })
        }
        else {
            res.json({
                message: "No product is there.."
            })
        }
    }
    catch (err) {
        res.json({
            message: "Error while getting data"
        })
    }
}

module.exports = {
    createProduct, getAllProduct
}