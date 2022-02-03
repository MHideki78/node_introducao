const db = require("./database");
const { imc } = require("./imc");

db.pets.forEach((pet) => console.log(pet));

db.pessoas.forEach((p) => {
  console.log(p.nome, p.idade, imc(p.peso, p.altura));
});
