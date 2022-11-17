const valorEtiqueta = 155.35;
let meioDePagamento = 4;

//vista debito 10%
//vista Dinheiro ou Pix 15%
//2 x preço normal
//mais vezes juros de 10%s

if (meioDePagamento === 1) {
  console.log(valorEtiqueta - valorEtiqueta * 0.1);
} else if (meioDePagamento === 2) {
  console.log(valorEtiqueta - valorEtiqueta * 0.15);
} else if (meioDePagamento === 3) {
  console.log(valorEtiqueta);
} else {
  console.log(valorEtiqueta + valorEtiqueta * 0.1);
}

//if (meioDePagamento === "Débito") {
//let total = valorEtiqueta * 0.9;
// console.log(total.toFixed(2));
//} else if (meioDePagamento === "Dinheiro") {
//let total = valorEtiqueta * 0.85;
//console.log(total.toFixed(2));
//} else if (meioDePagamento === "2x") {
//let total = valorEtiqueta;
//console.log(total.toFixed(2));
//} else {
//let total = valorEtiqueta;
//}
