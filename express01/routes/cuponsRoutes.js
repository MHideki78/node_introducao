const { Router } = require("express");

const cupons = [];

const router = Router();

router.get("/cupons", (req, res) => {
  res.json(cupons);
});

router.get("/cupons/adicionar", (req, res) => {
  res.send(`
    <h1>Novo cupom</h1>
    <form action="/cupons/enviar" method="POST">
      <input name="codigo" placeholder="Código" required/>
      <input name="validade" placeholder="Validade" required />
      <button>Enviar</button>
    </form>
  `);
});

router.post("/cupons/enviar", (req, res) => {
  const { codigo, validade } = req.body;
  cupons.push({ codigo, validade });
  res.redirect("/cupons");
});

module.exports = router;
