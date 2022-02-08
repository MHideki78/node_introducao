function proibirHome(req, res, next) {
  console.log("Acessando a home");
  res.send("<h2>Proibido acessar</h2>");
}

module.exports = { proibirHome };
