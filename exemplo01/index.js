const calc = require("./calc");

console.log(calc.divisao(4, 2));
console.log(calc.multiplicacao(4, 2));
const calculadora = new calc.Calculadora();

console.log(calculadora.soma(2, 3));

// Segunda forma: Extrai do módulo apenas o que
// quiser

// const { Calculadora, divisao } = require("./calc");

// console.log(divisao(2, 3));

// const calculadora = new Calculadora();
// console.log(calculadora.soma(2, 3));
