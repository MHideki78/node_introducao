const express = require("express");

const app = express();

// Decodifica os dados da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cuponsRoutes = require("./routes/cuponsRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.use(cuponsRoutes);
app.use(usuarioRoutes);

// O que fazer quando não encontra a rota:
app.use((req, res, next) => {
  res.status(404).send("<h1>Página não encontrada</h1>");
});

app.listen(3000);
