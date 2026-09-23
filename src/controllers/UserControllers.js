
const UserModel = require("../models/UserModel")
const userModel = require("../models/UserModel")
const mailSend = require("../utilites/MailUtils")
const uploadtoCloud = require("../utilites/CloudinaryUpload")
const xlsx = require("xlsx");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const secret = "royal"
const getAllUSers = async (req, res) => {
    const users = await userModel.find().populate("Roleid")
    res.json({ message: "get all users..", data: users })
}
const getUSerById = async (req, res) => {
    const id = req.params.id;

    // const foundUser = await userModel.findOne({_id : id})
    const foundUser = await userModel.findById(id)
    if (foundUser) {
        res.json({ message: "User found ", data: foundUser })
    } else {
        res.json({ message: "User not found " })
    }

}
const SearchUser = async (req, res) => {
    const data = req.query;
    res.json({ data: data })
}
// const CreateUser = async(req,res)=>{
//     try{
//     // console.log("Req body",req.body)
//     console.log("req file..",req.file);
//     const cloudinaryrespones = await uploadtoCloud(req.file.path)
//     console.log("cloudinary respones",cloudinaryrespones)
//      const savedUser = await userModel.insertOne({...req.body,profilepicUrl:cloudinaryrespones.secure_url})
//      //mailSend(req.body.email,"","")
//      await mailSend(req.body.email,"Testing royal","hi someone from me")
//     res.json({message : "Data fetch from postman",data:savedUser})
//     }
//     catch(err) {
//         res.json({err:err})
//     }
// }
const CreateUser = async(req,res)=>{
    try{
    // console.log("Req body",req.body)
    console.log("req file..",req.file);
    //  const savedUser = await userModel.insertOne({...req.body,profilepicUrl:req.file.path})
    //  //mailSend(req.body.email,"","")
    
    // const u = req.files.map((file) => uploadtoCloud(req.file.path));
    const u = await Promise.all(
        req.files.map((file)=>uploadtoCloud(file.path)),
    );
    const urls = u.map((url)=>url.secure_url)
    console.log("urls",urls);
     const pass = bcrypt.hashSync(req.body.password,10)
   
    const savedUser = await userModel.insertOne({...req.body,profilepicUrl:u[0].path,ProfileThumb:urls,password:pass});
    const token = jwt.sign({id : savedUser._id},secret,{expiresIn : '6m'})
    const updated =  await userModel.findByIdAndUpdate(savedUser._id,{refreshToken:token})
    console.log(updated)
    res.json({message : "Data fetch from postman",data:savedUser})
     
    
    }
    catch(err) {
        res.json({err:err})
    }
}

const DeleteUser = async(req,res)=>{
    const id = req.params.id;
    const deletedUser = await UserModel.findByIdAndDelete(id,{new : true})
    if(deletedUser){
        res.status(200).json({
            message : "User Deleted Successfully",
            data : deletedUser,
        })
    }else{
        res.status(400).json({
            message : "User not found"

        })
    }
}
const UpdateUSer = async(req,res)=>{
    const id = req.params.id;
   
    try{
        const UpdatedUser = await userModel.findByIdAndUpdate(id,req.body,{new:true})
       
        if(UpdatedUser){
            res.json({
                message : "User Updated Successfully!!",
                data : UpdateUSer
            })
        }else{
            res.json({
                message : "User Not updated"
            })
        }

    }catch(err){
        res.json({
            message : "user upated ... fail"
        })
    }
}
const UpdateByAge = async(req,res)=>{
    const age = req.params.age;
    const body = req.body;
    const UpdateMany = await userModel.updateMany({age : {$gte :  age}},{$set : body})
    if(UpdateMany){
        res.status(200).json({
            message : "Updated Successfully",
            data : UpdateMany
        })
    }else{
        res.json({
            message : "Not found"
        })
    }
}

const UpdateData = async(req,res)=>{
    try{

    const data = req.query.id;
   
    if(data){
    const UpdatedData = await UserModel.findByIdAndUpdate(data,req.query)
    if(UpdatedData){
        res.status(200).json({
            message : "Data Modified ",
            data : UpdatedData
        })
    }else{
        res.json({
            message : "Not found"
        })
    }}
    else{
        res.json({
            message : "Id not found"
        })
    }
    }catch(err){
        res.json({
            message : "Err ",
            err : err
        })
    }
}
const CreateMultipleUser = async(req,res)=>{

    console.log("files",req.file)
    const workbook = xlsx.readFile(req.file.path)
    const sheetNames = workbook.Sheets[workbook.SheetNames[0]];
    const u = xlsx.utils.sheet_to_json(sheetNames);
    console.log(u)
    const SavedUser = await userModel.insertMany({u})
    res.json({message:"ok"})
}
const LoginUser = async (req, res) => {
    try {
        const email = req.body.email;
        const FoundUserFromEmail = await userModel.findOne({
            email: email
        });
        if (!FoundUserFromEmail) {
            res.json({
                message: "User not found"
            });
        }
        if (bcrypt.compareSync(req.body.password, FoundUserFromEmail.password)) {
            // const token = jwt.sign(FoundUserFromEmail.toObject(), secret);
             const token = jwt.sign({id:FoundUserFromEmail._id},secret);

            res.json({
                message: "Login Success",
                data: token
            });
        } else {
            res.json({
                message: "Login Failed"
            });
        }
    } catch (err) {

        console.log(err);

       res.json({
            message: "Error",
            err: err
        });
    }
};
module.exports = {
    getAllUSers,SearchUser, getUSerById, CreateUser,DeleteUser,UpdateUSer,UpdateByAge,UpdateData, CreateMultipleUser,LoginUser
}   