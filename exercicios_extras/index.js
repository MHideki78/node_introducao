const { Academico, Aluno } = require("./academico");

const alunos = [
  new Aluno("John Locke", 8, 9),
  new Aluno("John Locke", 7, 9),
  new Aluno("John Locke", 3, 9),
  new Aluno("John Locke", 10, 9),
  new Aluno("John Locke", 5, 9),
];

console.log(Academico.aprovados(alunos));
console.log(Academico.reprovados(alunos));
