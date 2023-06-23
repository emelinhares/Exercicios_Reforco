// Dado o seguinte objeto:
const carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 2021,
  motor: {
    cilindrada: 5000,
    combustivel: "gasolina",
  },
};

// Utilize destructuring para extrair as propriedades 'marca', 'modelo', 'combustivel' e 'potencia' do objeto carro.
// Atribua um valor padrão de 'Desconhecida' para a propriedade 'potencia' caso ela não exista no objeto.
const {
  marca,
  modelo,
  motor: { combustivel, potencia = "Desconhecida" },
} = carro;
console.log(marca, modelo, combustivel, potencia);
