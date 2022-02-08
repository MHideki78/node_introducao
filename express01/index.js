const express = require("express");

const app = express();

// Decodifica os dados da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

const users = [];

// Define um middleware
function proibirHome(req, res, next) {
  console.log("Acessando a home");
  res.send("<h2>Proibido acessar</h2>");
}

// localhost:3000
app.get("/", proibirHome, (req, res) => {
  res.send(`
    <h1>Hello, Node!</h1>
    <a href="/usuario">NOVO USUÁRIO</a>
  `);
});
// localhost:3000/usuarios
app.get("/usuarios", (req, res) => {
  let html = `<ul>`;
  users.forEach((user) => {
    html += `<li>${user.nome} | ${user.idade}</li>`;
  });
  html += `</ul>`;

  res.send(html);
});

// localhost:3000/usuario
app.get("/usuario", (req, res) => {
  res.send(`
      <h1>Novo usuário</h1>
      <form action="/usuario/enviar" method="POST">
        <input name="nome" placeholder="Nome" required/>
        <input name="idade" placeholder="Idade" required />
        <button>Enviar</button>
      </form>
    `);
});
// localhost:3000/usuario/enviar?nome=jose&idade=20
app.post("/usuario/enviar", (req, res) => {
  //   console.log(req.query); // objeto com parâmetros de busca
  const { nome, idade } = req.body; // extrai o corpo da requisição
  users.push({ nome, idade });
  //   console.log(users);
  res.redirect("/usuarios");
});
// localhost:3000/usuario/1
app.get("/usuario/:index", (req, res) => {
  const { index } = req.params; // objeto de parâmetro de rota
  const usuario = users[index];

  if (usuario) {
    res.send(`<h1>Olá, ${usuario.nome}!</h1>`);
  } else {
    res.status(404).send(`<h1>Usuário não encontrado</h1>`);
  }
});

// Esquema de rota de livros

// O que fazer quando não encontra a rota:
app.use((req, res, next) => {
  res.status(404).send("<h1>Página não encontrada</h1>");
});



app.listen(3000);
