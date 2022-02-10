const Produto = require("../models/Produto");

class ProdutoController {
  static async paginaProdutos(req, res) {
    let query = {};
    const { nomeProduto } = req.query;

    if (nomeProduto) {
      query = { name: { $regex: `${nomeProduto}`, $options: "i" } };
    }

    const produtos = await Produto.find(query).lean();
    res.render("produtos", { produtos, nomeProduto });
  }

  static async paginaAdicionarProduto(req, res) {
    res.render("add_produto");
  }

  static async addProduto(req, res) {
    const { name, price, description, quantity } = req.body;
    const produto = Produto({ name, price, description, quantity });
    await produto.save();

    res.redirect("/produtos");
  }
}

module.exports = ProdutoController;
