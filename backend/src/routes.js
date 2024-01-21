const express = require("express");
const cors = require("cors");
const route = express.Router();
const register = require("./controllers/register");
const get = require("./controllers/list");
const location = require("./controllers/location")

route.use(express.json());
route.use(cors());

route.post('/register', register);
route.get('/get', get);
route.get('/location',location);


module.exports = route;