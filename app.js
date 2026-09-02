const express = require("express")
require("dotenv").config()
const app = express() // ap makes the function of the express which can be accessible in the app.listen..
const getDbConnection = require("./src/utilites/DbConnection")
getDbConnection()
app.use(express.json())

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const EmployeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/Employees",EmployeeRoutes)

const RoleRoutes = require("./src/routes/RoleRoutes")
app.use("/role",RoleRoutes)

const CategoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",CategoryRoutes)

const ProductRoutes = require("./src/routes/ProductRoutes")
app.use("/product",ProductRoutes)

const PORT =  process.env.PORT||3000 
app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`)
})