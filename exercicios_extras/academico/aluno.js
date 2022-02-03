class Aluno {
  constructor(nome, n1, n2) {
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;
  }

  get media() {
    return (this.n1 + this.n2) / 2;
  }
}

module.exports = { Aluno };
// module.exports = Aluno;
