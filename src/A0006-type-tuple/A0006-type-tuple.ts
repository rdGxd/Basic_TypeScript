// Tuple é um array com tipos bem específicos e tamanho fixo

// Eu Consigo adicionar valores com PUSH ou remover com o POP
// Se eu acrescentar readonly a minha tupla fica imutável
const dadosCliente1: readonly [number, string] = [1, 'Rodrigo'];
const dadosCliente2: [number, string, string] = [1, 'Rodrigo', 'Silva'];
const dadosCliente3: [number, string, string?] = [1, 'Rodrigo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Rodrigo'];

// O mudando o valor do índice 0 -> LEMBRANDO TEM QUE TER O MESMO TIPO
// dadosCliente1[0] = 200;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
