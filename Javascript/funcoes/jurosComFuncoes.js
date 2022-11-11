function criarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function criarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

const valorEtiqueta = 100;
const meioDePagamento = 4;

//vista debito 10%
//vista Dinheiro ou Pix 15%
//2 x preço normal
//mais vezes juros de 10%s

if (meioDePagamento === 1) {
  console.log(criarDesconto(valorEtiqueta, 10));
} else if (meioDePagamento === 2) {
  console.log(criarDesconto(valorEtiqueta, 15));
} else if (meioDePagamento === 3) {
  console.log(valorEtiqueta);
} else {
  console.log(criarJuros(valorEtiqueta, 10));
}
