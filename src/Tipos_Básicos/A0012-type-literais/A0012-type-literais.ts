// Sempre vai criar um tipo literal utilizando CONST
// Quando não poder usar const faça uma asserção de const

let x = 10; // eslint-disable-line
x = 0b1010;

// O tipo de Y sempre vai ser 10 -> ESSE É UM TIPO LITERAL -> ELE É UM SUB-TIPO DE NUMBER
const y = 10;
let a = 100 as const; // eslint-disable-line

const person = {
  // fazendo asserção de const
  firstName: 'Rodrigo' as const, // Essa pessoa só pode ter o nome Rodrigo
  lastName: 'Silva',
};

// Isso vai dar erro
person.firstName = 'Luiz';

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));

// Module mode -> apenas para sair do escopo global
export default 1;
