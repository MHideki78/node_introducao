const { Router } = require("express");
const ProdutoController = require("../controllers/ProdutoController");
const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos);
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);

router.post("/produtos/enviar", ProdutoController.addProduto);

module.exports = router;
