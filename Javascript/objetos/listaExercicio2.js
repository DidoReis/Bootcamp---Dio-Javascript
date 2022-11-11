class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const IMC = this.calcularIMC();
    if (IMC <= 18.5) {
      return "Abaixo do Peso";
    } else if (IMC >= 18.5 && IMC <= 25) {
      return "Peso Normal";
    } else if (IMC >= 25 && IMC < 30) {
      return "Acima do peso";
    } else if (IMC >= 30 && IMC <= 40) {
      return "Obeso";
    } else {
      return "Obesidade Grave";
    }
  }
}

const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarImc());

const erika = new Pessoa("Erika", 70, 1.65);
console.log(erika.classificarImc());
