// Undefined -> algo não foi definido
// Null -> quando eu quero ser especifico com o retorno da função eu posso colocar return TIPO | null
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  // Abertura da função
  firstName: string,
  lastName?: string,
): {
  // Type annotation
  firstName: string;
  lastName?: string;
} {
  // Corpo da função
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  // Como eu fiz a checagem acima o TypeScript sabe que aqui ele é um number
  console.log(squareOfTwoNumber);
}
