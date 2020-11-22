// 1) uma funcao somar que, por exemplo, recebe 3 4 e 5 de params e soma usando essa estrategia: somar(3)(4)(5)
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

const sumAB = sum(3)(4);
console.log(sumAB(13));
console.log(sumAB(13)(20)(30));


// 2) create a function named calcular(3)(7)(fn) sendo que
// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7

function calcular(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y)
    }
  }
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

const r1 = calcular(10)(5)(subtract);
const r2 = calcular(10)(5)(multiply);
console.log(r1);
console.log(r2);
