const pool = require('../database/connection')
const request = (data) => {
    Object.keys(data).forEach((item) => {
        if(!data[item]){
            throw new Error(`field not send: ${item}`)
        }
        if(!data.phone.match(/[0-9]+/g) || data.phone.length != 13){
            throw new Error(`field phone is invalid number`);
        }
    } ) 
}
const register = async(req,res) => {
    try{
        const {name,email,phone} = req.body
        request({name: name,email: email,phone: phone})
        await pool.query(`insert into clients(name,email,phone) values('${name}', '${email}', '${phone}')`)
        return res.status(201).json({message: 'Registered Client'})
    }catch(err){
        return res.status(400).json({message: err.message})
    }
 
    
}
module.exports = register