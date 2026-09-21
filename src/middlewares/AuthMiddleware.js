const jwt = require("jsonwebtoken")
const secret = "royal"
const userModel = require("../models/UserModel")
const AuthMiddleware = async(req,res,next)=>{

      var token = req.headers.authorization
      if(token){
        if(token.startsWith("Bearer ")){
            token = token.split(" ")[1]
            try{
                const decoded = jwt.verify(token,secret)
                const verifiedUser = await userModel.findById(decoded.id)
                if(verifiedUser){
                
                next() 

                }else{
                    res.status(401).json({
                        message : "Not verified"
                    })
                }

            }catch(err){
                res.status(401).json({
                    message:"Token is invalid plz try again .. ",
                    err:err
                })
            }
        }else{
            res.status(401).json({
                message:"Require a Bearer token "
            })
        }
      }else{
        res.status(401).json({
            message:"Missing tokken"
        })
      }


}

module.exports = AuthMiddleware