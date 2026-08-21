const mongoose = require("mongoose")

const getDbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/25fulldaynode").then(() => {
        console.log("Database connected to the local host from your port successfully")
    }).catch((err) => {
        console.log("Something unusaual happen in between - > ",err)
    })
}

module.exports = getDbConnection