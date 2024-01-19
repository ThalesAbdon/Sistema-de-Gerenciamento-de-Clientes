const express = require("express")
const route = express.Router();


route.get('/health', (req,res) => {
    return res.status(200).json({
        service: 'OK!'
    })
})

module.exports = route;