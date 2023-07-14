// Seria basicamente você criar um apelido para um tipo -> jogar um tipo em uma variável

// Tipos criados por nós são iniciados com letras maiúsculas
type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade; // Usando um tipo dentro do outro
  salario: number;
  corPreferida?: CorPreferida;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
// Union types
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Rodrigo',
  idade: 25,
  salario: 200_000, // 200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(pessoa);
