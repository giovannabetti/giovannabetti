const carrinho = [
  { nome: 'Caneta', qdte: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qdte: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qdte: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qdte: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qdte: 1, preco: 19.29, fragil: true },
]

// filter, map, reduce
// 1. fragil: true

// 2. qtde * preco -> total

// 3. media totais

const media = carrinho
  .filter(item => item.fragil)
  .map(item => item.qdte * item.preco)
  .reduce((acc, el) => {
    const novaQtde = acc.qdte + 1
    const novoTotal = acc.total + el
    return {
      qdte: novaQtde,
      total: novoTotal,
      media: novoTotal / novaQtde
    }
  }, { qdte: 0, total: 0, media: 0 }) // valor inicial
.media
// ou

const fragil = item => item.fragil
const getTotal = item => item.qdte * item.preco
const getMedia = (acc, el) => {
  const novaQtde = acc.qdte + 1
  const novoTotal = acc.total + el
return {
  qtde: novaQtde,
  total: novoTotal,
  media: novoTotal / novaQtde
  }
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
  .filter(fragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial)
  .media

console.log(`A media eh ${media}!`)