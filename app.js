const express = require("express")
require("dotenv").config()
const app = express() // ap makes the function of the express which can be accessible in the app.listen..
const getDbConnection = require("./src/utilites/DbConnection")
const {Queue} = require("bullmq")
const mailSend = require("./src/utilites/MailUtils")
getDbConnection()
const bcrypt = require("bcrypt");
app.use(express.json())// this is written to give the data in raw form in postman..
const Redis = require("ioredis");
const userModel = require("./src/models/UserModel")


const redisConnection = new Redis(
    "redis://default:IlBL3jv315KIDSnQVLMQb7H9BH7FqgWC@ultravivid-tame-stellar-19753.db.redis.io:13372"
)
console.log(redisConnection)
const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes) // parenting routing as it will be eaiser to found the url 



const myQueue = new Queue("taskQ",{connection:redisConnection})

app.post("/add-task",async(req,res)=>{
    console.log("adding task to queue...")
    const name = req.body.name
    const email = req.body.email
    await myQueue.add("task",{name,email},{delay:0})
    res.json({
        message:"task has been assigend"
    })
})

app.post("/otp",async(req,res)=>{
    const createotp = Math.floor(Math.random()*1000000);
    const email = req.body.email
    await redisConnection.set(`otp:${email}`,createotp.toString())
    mailSend(req.body.email,createotp.toString())
    res.json({
        message:"otp sent to your gmail",
        otp:createotp
    })
   
})
app.post("/verifyotp",async(req,res)=>{
    const email = req.body.email
    const otp = req.body.otp
    const storedOtp = await redisConnection.get(`otp:${email}`)
    console.log(storedOtp)
    if(otp == storedOtp){
        res.json({
            message : "Otp matches successfully",
            verifiedotp : otp
        })
    }else{
        res.json({
            message : "Otp does not match"
        })
    }
})

app.post("/resetpass",async(req,res)=>{
    const otp = req.body.otp;
    const email = req.body.email;
    const pass = req.body.newPassword;
    const storedOtp = await redisConnection.get(`otp:${email}`)
     if(otp == storedOtp){
        const foundUser = await userModel.findOne({email : email})
        const newPassword = bcrypt.hashSync(pass,10)
        const updated = await userModel.findByIdAndUpdate(foundUser._id,{password : newPassword})
        
        res.json({
            message : "Password reset successfully",
           newPass : newPassword,
           updated : updated
        })
    }else{
        res.json({
            message : "Password is not reseting"
        })
    }
  
})


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