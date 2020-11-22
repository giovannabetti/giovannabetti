// arrow function
const felizNatal = () => console.log('Feliz Natal!!!');

felizNatal();

const saudacao = nome => 'Fala ' + nome + ', blz?!';
console.log(saudacao('Maria'));
// out
const saudacao = nome => `Fala ${nome}, blz?!`;
console.log(saudacao('Maria'));

// ou eu uso function(nome) {} ou nome => {}

const somar = numeros => {
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const somar = (...numeros) => {
  console.log(Array.isArray(numeros) ? numeros : [numeros]) // true
  let total = 0
  for(let n of numeros) {
    total += n
  }
  return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// transformar a funcao abaixo em uma funcao arrow
// refatorando

function potencia(base) {
  return function (exp) {
    return Math.pop(base, exp)
  }
}

const potencia = (base) => {
  return function (exp) {
    return Math.pop(base, exp)
  }
}

const potencia = (base) => {
  return (exp) => {
    return Math.pop(base, exp)
  }
}

const potencia = base => {
  return exp => {
    return Math.pop(base, exp)
  }
}

const potencia = base => exp => Math.pop(base, exp)
console.log(potencia(2)(10));

// this
Array.prototype.log = function() {
  console.log(this)
}

const numeros = [1, 2, 3]
numeros.log()

Array.prototype.ultimo = function() {
  console.log(this[this.length - 1])
}

const numeros = [1, 2, 3]
numeros.ultimo() // 3

Array.prototype.primeiro () = {
  console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.primeiro() // undefined - nao vai acessar, porque this funciona de uma forma diferente

Array.prototype.primeiro = function() {
  console.log(this[0])
}

const numeros = [1, 2, 3]
numeros.primeiro()

const subtract2 = (a, b) => a - b

console.log(subtract2(4, 1));