const pessoa = require("./pessoa");
const pet = require("./pet");

const pessoas = [
  new pessoa.Pessoa("Lorem ipsum", 19, 67, 1.76),
  new pessoa.Pessoa("Lorem ipsum", 19, 67, 1.76),
  new pessoa.Pessoa("Lorem ipsum", 19, 67, 1.76),
];

const pets = [
  new pet.Pet("Rex", 19),
  new pet.Pet("Rex", 19),
  new pet.Pet("Rex", 19),
  new pet.Pet("Rex", 19),
];

module.exports = { pessoas, pets };
