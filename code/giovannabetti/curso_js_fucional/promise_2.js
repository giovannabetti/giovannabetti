
setTimeout(function() {
  console.log('Executing callback...')
}, 2000)

// sometimes you need to call a callback after another
setTimeout(function() {
  console.log('Executing callback...')

  setTimeout(function() {
    console.log('Executing callback...')

    setTimeout(function() {
      console.log('Executing callback...')
    }, 2000)
  }, 2000)
}, 2000)


function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Executing a promise...')
      resolve('Vishhhhh')
    }, tempo)
  })
}

esperarPor(3000).then(texto => console.log(texto))


function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log('Executing a promise...')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)