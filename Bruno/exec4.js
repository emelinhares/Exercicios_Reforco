// Dado o seguinte objeto:
const aluno = {
  nome: "Maria",
  notas: [7, 8, 9],
};

// Utilize destructuring para extrair as notas do aluno em variáveis separadas.
const {
  notas: [a, b, c],
} = aluno;
console.log(a, b, c);
