const route = require('./routes')
const express = require("express");
require('dotenv').config();

const port = process.env.PORT;
const app = express();
app.use(route)
app.listen(port, () => {
    console.log(`Servidor Local: http://localhost:${port}`);
    console.log("Servidor executando na porta 3006");
  });
