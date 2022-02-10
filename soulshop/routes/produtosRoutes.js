const { Router } = require("express");
const multer = require("../storage");
const ProdutoController = require("../controllers/ProdutoController");
const router = Router();

router.get("/produtos", ProdutoController.paginaProdutos);
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);

router.post(
  "/produtos/enviar",
  multer.single("image"),
  ProdutoController.addProduto
);

module.exports = router;
