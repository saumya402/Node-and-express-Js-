const mongoose = require("mongoose")

const getDbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/25fulldaynode").then(() => {
        console.log("Connected")
    }).catch((err) => {
        console.log("Error",err)
    })
}

module.exports = getDbConnection