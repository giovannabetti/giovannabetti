const carrinho = [
  { nome: 'Caneta', qdte: 10, preco: 7.99 },
  { nome: 'Impressora', qdte: 0, preco: 649.50 },
  { nome: 'Caderno', qdte: 4, preco: 27.10 },
  { nome: 'Lapis', qdte: 3, preco: 5.82 },
  { nome: 'Tesoura', qdte: 1, preco: 19.29 },
]

const qtdeMaiorQueZero = item => item.qtde > 1
const itensValidos = carrinho.filter(qtdeMaiorQueZero)
console.log(itensValidos)

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0

const nomeItensValidos = carrinho
  .filter(qtdeMaiorQueZero)
  .map(getNome)

console.log(nomeItensValidos)

// Funcao Filter Aula#04

Array.prototype.meuFilter = function(fn) {
  const novoArray = []

  for (let i = 0; i < this.length; i++) {
    if(fn(this[i], i, this)) {
      novoArray.push(this[i])
    }
  }
  return novoArray
}

const nomeItensValidos2 = carrinho
  .filter(qtdeMaiorQueZero)
  .map(getNome)

console.log(nomeItensValidos2)