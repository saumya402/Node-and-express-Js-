const CategoryModel = require("../models/CategoryModel")

const CreateCategory = async(req,res)=>{
    try{
        const savedCategory = await CategoryModel.create(req.body)
        res.json({
            message : "Category saved",
            data : savedCategory

        })
    }catch(err){
        res.json({message : "error while creating category"},
            
        )
    }
}

const getAllCategory = async(req,res)=>{
    try{
        const categories = await CategoryModel.find()
        if(categories.length > 0){
            res.json({
                message : "Data fetch successfully",data : categories
            })
        }else{
            res.json({
               message :"Empty data"
            })
        }
    }
    catch(err){
         res.json({message : "error while getting  category"})
    }
}

module.exports = {
    CreateCategory,getAllCategory
}