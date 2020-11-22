function bomDia() {
  console.log('Bom dia!');
}

function boaTarde = function () {
  console.log('Boa tarde!');
}

// 1) Passar uma funcao como param pra outra funcao
function executeSomething(fn) {
  if(typeof fn === 'function') {
    fn()
  }
}

executeSomething(3);
executeSomething(bomDia);
executeSomething(boaTarde);

// 2) Retornar uma funcao a partir de uma outra funcao

function potencia(base, exp) {
  return Math.pow(base, exp);
}

const bits8 = potencia(2, 128);
console.log(bits8);

function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp);
  }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);