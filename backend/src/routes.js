const express = require("express")
const route = express.Router();
const register = require("./controllers/register")
const get = require("./controllers/list")

route.use(express.json())

route.post('/register', register)

route.get('/get', get)

route.get('/health', (res) => {
    return res.status(200).json({
        service: 'OK!'
    })
})


module.exports = route;
