const express = require("express");
const cors = require("cors");
const route = express.Router();
const register = require("./controllers/register");
const get = require("./controllers/list");
const location = require("./controllers/location")

route.use(express.json());
route.use(cors()); // Adicione esta linha para habilitar o CORS

route.post('/register', register);
route.get('/get', get);
route.get('/location',location);

route.get('/health', (req, res) => {
    return res.status(200).json({
        service: 'OK!'
    });
});

module.exports = route;