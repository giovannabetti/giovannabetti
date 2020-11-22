
const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro)) // [2, 4, 6, 8, 10]


const nums = [1, 2, 3, 4, 5]
const dobro = (n, i) => n * 2 + i
console.log(nums.map(dobro)) // [2, 5, 8, 11, 14]

const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, array) => n * 2 + i + array.length
console.log(nums.map(dobro)) // [7, 10, 13, 16, 19]

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra)) // eh sempre gerado um novo array, o array inicial continua sendo o mesmo

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

// Funcao Map - aula 03

// Micro desafio:
// Criar duas funcoes que vao mapear o array abaixo  { nome: 'Caneta', qdte: 10, preco: 7.99 }

const carrinho = [
  { nome: 'Caneta', qdte: 10, preco: 7.99 },
  { nome: 'Impressora', qdte: 0, preco: 649.50 },
  { nome: 'Caderno', qdte: 4, preco: 27.10 },
  { nome: 'Lapis', qdte: 3, preco: 5.82 },
  { nome: 'Tesoura', qdte: 1, preco: 19.29 },
]

// Primeiro eu vou querer gerar um array apenas com os nomes dos produtos
const produtos = produto => produto.nome

// gerar outra funcao que vai pegar a qdte x preco de cada um dos produtos
const montante = produto => produto.qdte * produto.preco


// Função Map Aula#04
meuMap(array, fn) //ou
Array.prototype.meuMap = function(fn) {
  const novoArray = []

  // for(let el of this) {
  //   fn(el);
  // } poderia fazer com esse for

  for(let i = 0; i < this.length; i++) {
    const resultado = fn(this[[i], i, this])
    novoArray.push(resultado)
  }
  return mapped
}
// nesse caso nao pode ser uma arrow function, pq a gente vai precisar acessar o array

// outra maneira de fazer:
for(let i = 0; i < this.length; i++) {
  mapped.push(fn(this[[i], i, this]));
}
return mapped