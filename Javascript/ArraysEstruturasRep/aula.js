const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let somaNota = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  somaNota = somaNota + nota;
}

const media = somaNota / notas.length;
console.log(media);
