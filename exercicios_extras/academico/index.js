const { Aluno } = require("./aluno");

class Academico {
  static aprovados(alunos) {
    return alunos.filter((aluno) => aluno.media >= 7);
  }

  static reprovados(alunos) {
    return alunos.filter((aluno) => aluno.media < 7);
  }
}

module.exports = { Academico, Aluno };
