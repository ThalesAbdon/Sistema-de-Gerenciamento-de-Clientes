const route = require('./routes')
const express = require("express");
const app = express();
app.use(route)
app.listen(3006, () => {
    console.log("Acessar http://localhost:3006");
    console.log("Servidor executando na porta 3006");
  });
