// Array<TIPO> - TIPO[]
// Se eu acrescentar readonly o meu array não poderá ser alterado
const array: readonly string[] = ['Rodrigo', 'Silva'];
const array2: ReadonlyArray<string> = ['Rodrigo', 'Silva'];

console.log(array);
console.log(array2);

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('Ro', 'dri', 'go');
const upperCase = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upperCase);
