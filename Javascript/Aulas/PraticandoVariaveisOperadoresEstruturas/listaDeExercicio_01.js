let nota1 = 1;
let nota2 = 1;
let nota3 = 1;

let notasDoSemestre = (nota1 + nota2 + nota3) / 3;
console.log(notasDoSemestre);

if (notasDoSemestre < 5) {
  console.log("Aluno Reprovado");
} else if (notasDoSemestre >= 5 && notasDoSemestre <= 7) {
  console.log("Aluno em Recuperação");
} else {
  console.log("Aluno Aprovado");
}
