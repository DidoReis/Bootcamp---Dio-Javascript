const pessoa = {
  nome: "Dido Reis",
  idade: 42,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};

pessoa.descrever();
