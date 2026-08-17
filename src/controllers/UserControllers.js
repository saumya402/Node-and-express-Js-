const getAllUSers = (req, res) => {
    res.json({ message: "Getting the data of all user" })
}
const getUSerById = (req,res)=>{
    res.json({message : `Value in wildcard id ${req.params.id}`})
}

module.exports = {
    getAllUSers,getUSerById
}