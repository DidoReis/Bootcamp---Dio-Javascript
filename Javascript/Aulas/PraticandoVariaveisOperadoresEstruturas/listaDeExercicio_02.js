const peso = 120;
const altura = 1.7;

let IMC = peso / (altura * altura);

console.log(IMC);

if (IMC <= 18.5) {
  console.log("Abaixo do Peso");
} else if (IMC >= 18.5 && IMC <= 25) {
  console.log("Peso Normal");
} else if (IMC >= 25 && IMC < 30) {
  console.log("Acima do peso");
} else if (IMC >= 30 && IMC <= 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
