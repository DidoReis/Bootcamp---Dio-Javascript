const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 16, 18, 21];

for (let i = 0; i < numeros.length; i++) {
  const eNumeroPar = numeros[i];
  if (eNumeroPar % 2 === 0) {
    console.log(eNumeroPar);
  }
}
