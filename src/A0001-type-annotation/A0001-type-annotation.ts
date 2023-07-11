/* eslint-disable */
// NÃO COLOQUE TIPOS ANTES -> CRIE SEU CÓDIGO DEPOIS VERIFIQUE SE ELE INFERIU O TIPO -> SE O TIPO FOR <ANY> AI VOCE DEVE COLOCAR MANUALMENTE -> ANY SIGNIFICA QUE ELE NÃO CONSEGUIU INFERIR O TIPO PARA O SEU VALOR

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Rodrigo'; // Qualquer tipo de string: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [0, 1, 2, 3];
let arrayDeNumeros2: number[] = [0, 1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd'];
let arrayDeStrings2: string[] = ['a', 'b', 'c', 'd'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 25,
  nome: 'Rodrigo',
  adulto: true,
};

// Funções
// Você pode deixar o typescript declarar o tipo da função
/* :number depois dos ")" só é necessário se o TS não fizer automaticamente*/
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
// const soma3: TIPO = (x, y) => x + y;
