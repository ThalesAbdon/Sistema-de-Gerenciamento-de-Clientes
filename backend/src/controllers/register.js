const pool = require('../database/connection')
const request = (data) => {
    Object.keys(data).forEach((item) => {
        if(!data[item]){
            throw new Error(`field not send: ${item}`)
        }
        if(!data.phone.match(/[0-9]+/g) || data.phone.length != 11){
            throw new Error(`field phone is invalid number`);
        }
    } ) 
}
const register = async(req,res) => {
    try{
        const {name,email,phone,x,y} = req.body
        request({name: name,email: email,phone: phone, x: x, y: y})
        await pool.query(`insert into clients(name,email,phone,x,y) values('${name}', '${email}', '${phone}', '${x}', '${y}')`)
        return res.status(201).json({message: 'Registered Client'})
    }catch(err){
        return res.status(400).json({message: err.message})
    }
 
    
}
module.exports = register