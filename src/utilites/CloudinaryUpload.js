const cloudinary = require("cloudinary").v2
require("dotenv").config

const uploadCloud = async(path)=>{
    cloudinary.config({
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET_KEY,
        cloud_name:process.env.CLOUDINARY_NAME,
    })
    const cloudinaryrespones = await cloudinary.uploader.upload(path)
    return cloudinaryrespones;

}
module.exports = uploadCloud;
