// Dado o seguinte objeto:
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Desenvolvedor",
  endereco: {
    rua: "Rua Principal",
    numero: 123,
    cidade: "São Paulo",
  },
};

// Utilize destructuring para extrair as propriedades nome, idade e profissao do objeto pessoa.
const { nome, idade, profissao } = pessoa;
console.log(nome, idade, profissao);
