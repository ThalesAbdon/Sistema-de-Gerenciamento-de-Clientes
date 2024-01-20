const pool = require('../database/connection')

const get = async(req,res) => {
    try{
        const {name,email,phone} = req.query
        let response
        if(name || email || phone){
            response = await pool.query(`Select * from clients where name = '${name}' or email = '${email}' or phone = '${phone}'`)
        }else{
            response = await pool.query(`Select * from clients`)
        }
        return res.status(200).json(response.rows)
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

module.exports = get