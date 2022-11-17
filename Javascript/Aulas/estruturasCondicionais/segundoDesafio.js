const precoDaGasolina = 7;
const precoDoEtanol = 4;
const valorMedioGastoGasolina = 12;
const valorMedioEtanol = 9;
const distanciaKmViagem = 300;

let tipoDeCombustivel = "gasolina";

//let precoDoCombustivel = 7;
//let valorMedioGasto = 12;
//let distanciaDaViagem = 300;

if (tipoDeCombustivel === "gasolina") {
  let consumoViagem = distanciaKmViagem / valorMedioGastoGasolina;
  let gastoNaViagem = consumoViagem * precoDaGasolina;
  console.log(gastoNaViagem.toFixed(2));
} else {
  let consumoViagem = distanciaKmViagem / valorMedioEtanol;
  let gastoNaViagem = consumoViagem * precoDoEtanol;
  console.log(gastoNaViagem.toFixed(2));
}

//console.log(gastoNaViagem.toFixed(2));
