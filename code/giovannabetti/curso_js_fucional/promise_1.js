let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(3)
})

p.then(function(valor) {
  console.log(valor)
}) // 3

// the promise is a type of function. and just returns only one value. if you want to pass more values, you must create an object.

let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa({
    x: 3,
    y: 4,
  })
})

p.then(function(valor) {
  console.log(valor)
}) // { x: 3, y: 4 }

p.then(function(valor) {
  console.log(valor.x)
}) // { x: 3 }

// you can also generate a list
let p = new Promise(function(cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(function(valor) {
  console.log(valor)
}) // as an answer, we receive an array of data

// refactoring:
p.then(valor => console.log(valor))

// you can call a promise several times and run a function after another
p
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))

// or

function primeiroElemento(array) {
  return array[0]
}

// it can anso be an arrow function
const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)

 // another option is:

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)