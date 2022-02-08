const { Router } = require("express");

const users = [];

const router = Router();

router.get("/usuarios", (req, res) => {
  let html = `<ul>`;
  users.forEach((user) => {
    html += `<li>${user.nome} | ${user.idade}</li>`;
  });
  html += `</ul>`;

  res.send(html);
});

router.get("/usuario", (req, res) => {
  res.send(`
        <h1>Novo usuário</h1>
        <form action="/usuario/enviar" method="POST">
          <input name="nome" placeholder="Nome" required/>
          <input name="idade" placeholder="Idade" required />
          <button>Enviar</button>
        </form>
      `);
});

router.post("/usuario/enviar", (req, res) => {
  //   console.log(req.query); // objeto com parâmetros de busca
  const { nome, idade } = req.body; // extrai o corpo da requisição
  users.push({ nome, idade });
  //   console.log(users);
  res.redirect("/usuarios");
});

router.get("/usuario/:index", (req, res) => {
  const { index } = req.params; // objeto de parâmetro de rota
  const usuario = users[index];

  if (usuario) {
    res.send(`<h1>Olá, ${usuario.nome}!</h1>`);
  } else {
    res.status(404).send(`<h1>Usuário não encontrado</h1>`);
  }
});

module.exports = router;
