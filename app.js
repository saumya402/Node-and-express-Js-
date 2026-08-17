const express = require("express")

const app = express() // ap makes the function of the express which can be accessible in the app.listen..

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const EmployeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/Employees",EmployeeRoutes)
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`)
})