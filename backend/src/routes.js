const express = require("express")
const route = express.Router();
const register = require("./controllers/register")
route.use(express.json())
route.post('/register', register)

route.get('/health', (req,res) => {
    return res.status(200).json({
        service: 'OK!'
    })
})

module.exports = route;
