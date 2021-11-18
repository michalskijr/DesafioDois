const express = require("express");
const app = express();
const porta = 3000;

app.use(express.json());

const usuario = require("./rotas/usuario");
const notas = require("./rotas/notas")

app.use("/usuario", usuario);
app.use("/notas", notas);

app.listen(porta, function () {
    console.log(`Aplicação rodando na porta ${porta}`);
});
