const request = (name,email,phone) => {
    
}
const register = async(req,res) => {
    const {name,email,phone} = req.body
    return res.status(201).json({message: 'Registered Client'})
}
module.exports = register