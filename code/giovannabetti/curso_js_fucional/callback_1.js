function exec(fn, a, b) {
  return fn(a, b) // nao precisa colocar o return
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

// a ideia do callback eh voce passar uma funcao como paramentro para outra funcao e depois essa funcao vai ser chamada de volta

const subtrair = (w, z) => w - z;

cosnt r = exec(subtrair, 50, 25)
console.log(r);

const cb = () => console.log('Exec...');
setInterval(cb, 1000);
// chama a funcao de volta de 1 e 1 segundo. ctrl + alt + m para parar.

// voce passa uma funcao como paramentro, mas voce tbm pode, por exemplo:

setInterval(() => console.log('Exec...'), 1000);

// ou tambem posso
setInterval(function() {
  console.log('Exec...')
}, 1000)