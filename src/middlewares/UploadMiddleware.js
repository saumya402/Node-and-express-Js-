const multer = require("multer");

const storage = multer.diskStorage({
     filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
    destination:"./uploads"
})

const uploads = new multer({
    storage : storage,

})
module.exports = uploads