function gerarNumerosEntre(min, max) {
  if(min > max) {
    let a = [min, max];
    const [x, y] = a
  }
}

const array = [1, 2, 3]
array // 1, 2, 3
const [x, y] = array // 1, 2
const [x,, y] = array // 1, 3
// we call the process of destructuring: read the attributes of another structure, basically

function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max] // in other words, I am inverting the variable values
  }

  return new Promise((resolve) => {
    resolve(7)
  })
}

gerarNumerosEntre(10, 30).then(console.log)

function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }
return new Promise((resolve) => {
  const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
  resolve(aleatorio)
})
}

gerarNumerosEntre(10, 30).then(console.log)

function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }
return new Promise((resolve) => {
  const fator = max - min + 1
  const aleatorio = parseInt(Math.random() * fator) + min
  resolve(aleatorio)
})
}

gerarNumerosEntre(10, 30).then(console.log)


function gerarNumerosEntre(min, max) {
  if(min > max) {
    [max, min] = [min, max]
  }
return new Promise((resolve) => {
  const fator = max - min + 1
  const aleatorio = parseInt(Math.random() * fator) + min
  resolve(aleatorio)
})
}

gerarNumerosEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => `O numero gerado foi ${numX10}`)
  .then(console.log)