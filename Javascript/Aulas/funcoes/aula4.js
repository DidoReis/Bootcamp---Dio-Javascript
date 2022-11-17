function test() {
  console.log("Teste");
}

test();
function sayMyName(name) {
  console.log("Your name is" + name);
}

sayMyName("Dido Reis");

function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = 10;

console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
