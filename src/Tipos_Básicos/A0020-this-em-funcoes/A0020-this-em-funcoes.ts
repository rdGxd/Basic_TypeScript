/* Tipando o THIS em uma função */

// O this não é um argumento
export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

// Só podemos fazer a chamada dessa função usando call ou apply

// -> Primeiro argumento do call você passa que é this da função;
funcao.call(/* this -> */ new Date(), /* Argumentos -> */ 'Rodrigo', 25);

// -> No apply você passa os argumento dentro de um array
funcao.apply(/* this -> */ new Date(), /* Argumentos -> */ ['Luiz', 30]);
