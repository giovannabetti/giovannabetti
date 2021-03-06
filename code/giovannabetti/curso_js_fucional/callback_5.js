const carrinho = [
  { nome: 'Caneta', qdte: 10, preco: 7.99 },
  { nome: 'Impressora', qdte: 0, preco: 649.50 },
  { nome: 'Caderno', qdte: 4, preco: 27.10 },
  { nome: 'Lapis', qdte: 3, preco: 5.82 },
  { nome: 'Tesoura', qdte: 1, preco: 19.29 },
]

const getTotal = item => item.qdte * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
  .map(getTotal)
  .reduce(somar)

console.log(totalGeral)


const getTotal = item => item.qdte * item.preco
const somar = (acc, el) => {
  console.log(acc, el)
  return acc + el
}

const totais = carrinho
  .map(getTotal)

console.log(totais)

const totalGeral = totais.reduce(somar, 1000) // ou somar, 0 - se quiser comecar do valor inicial 1000, por exemplo, mas pode ser qualquer um

console.log(totalGeral)

// Reduce Aula#03

Array.prototype.meuReduce = function(fn, inicial) {
  let acc = inicial

  for(let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i]
      continue
    }

    acc = fn(acc, this[i], i, this)
  }
  return acc
}

const totalGeral2 = carrinho
  .map(getTotal)
  .meuReduce(somar)

console.log(totalGeral2)

  // tambem poderia utilizar essa logica no desafio 2, chamando meuReduce e o resultado da media seria o mesmo