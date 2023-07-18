// Declaration merging em interfaces

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
  idade?: number;
}

const pessoa123: Pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Silva',
  enderecos: [`Av.Brasil`],
};

console.log(pessoa123);
