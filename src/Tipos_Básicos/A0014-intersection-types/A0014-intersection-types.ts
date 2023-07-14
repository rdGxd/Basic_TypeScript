// & -> pode ser lido como AND
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // -> Intersection types

// Conjunto
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // -> Interseção é o A

const pessoa: Pessoa = {
  idade: 25,
  nome: 'Rodrigo',
  sobrenome: 'Silva',
};
console.log(pessoa);

// Module mode
export { pessoa };
