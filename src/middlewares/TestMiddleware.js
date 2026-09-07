const TestMiddleware = (role)=> (req,res,next)=>{
    console.log("Test middleware is called...")
    // next();
     console.log("Roles =>",role)
     if(role == "Admin"){
        next();
     }else{
        res.status(400).json({
            message : "Invalid"
        })
     }
}

module.exports =  TestMiddleware;