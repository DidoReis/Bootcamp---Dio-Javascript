/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá três variáveis, sendo elas:

1 preço do combustível.
2 gasto médio de combustível do carro por Km.
3 distância em Km da viagem.

Imprima no console o valo que será gasto de combustível para realizar a viagem.
*/

let precoDoCombustivel = 7;
let valorMedioGasto = 12;
let distanciaDaViagem = 300;

let consumoViagem = distanciaDaViagem / valorMedioGasto;
let gastoNaViagem = consumoViagem * precoDoCombustivel;
console.log(gastoNaViagem.toFixed(2));
