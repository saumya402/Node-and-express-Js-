const zodMiddleware = (schema)=>(req,res,next)=>{
    try{
        schema.parse(req.body);
        next();
    }catch(err){
        res.status(400).json({
            message : "Invalid Request",
            err : err
        })
    }
}
module.exports = zodMiddleware;