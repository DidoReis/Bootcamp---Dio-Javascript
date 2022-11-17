class Carros {
  marca;
  cor;
  gastoMedioporKm;

  constructor(marca, cor, gastoMedioporKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioporKm = gastoMedioporKm;
  }
  calulcarViagem(distanciaEmKm, precoDoCombustivel) {
    return distanciaEmKm * this.gastoMedioporKm * precoDoCombustivel;
  }
}

const uno = new Carros("Fiat", "vermelho", 1 / 12);
const palio = new Carros("Fiat", "verde", 1 / 10);

console.log(uno.calulcarViagem(70, 5));
console.log(palio.calulcarViagem(70, 5));

console.log(palio, uno);
