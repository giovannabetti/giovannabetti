// agora vamos usar o callback para que a gente possa ler um arquivo e quando o arquivo for lido, uma funcao sera chamada, ou seja, quando acontecer um evento - nesse caso, o evento sera a leitura do arquivo

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo)

// voce nao pode inverter os parametros, mas pode suprimir algum. o segundo, neste exemplo:

fs.readFile(caminho, exibirConteudo)

console.log('Inicio')
// se o primeiro parametro nao importar, por convencao usa-se
function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString());
}

fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))

console.log('Fim')
// imprime os dois logs primeiro, porque a leitura eh feita em segundo plano

// ou de maneira sincrona

console.log('Inicio Sync')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync')